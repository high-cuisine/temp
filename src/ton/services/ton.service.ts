import { Injectable, OnModuleInit } from '@nestjs/common';
import axios from 'axios';
import { cfg } from '@infra/config';

const BN = require('bn.js');

interface Payment {
	txHash: string;
	from: string;
	to: string;
	amount: string;
	rawAmount: string;
	asset: string;
	blockTime?: number;
	boc?: string;
}

@Injectable()
export class TonService implements OnModuleInit {
	private readonly TON_DECIMALS = 9;
	private readonly toncenterUrl = 'https://toncenter.com/api/v2/';
	private readonly tonweb: any;
	private readonly tonwebModule: any;
	private readonly jettonWalletCache = new Map<string, string | null>();

	constructor() {
		this.tonwebModule = require('tonweb');
		const HttpProvider = this.tonwebModule.HttpProvider;
		const provider = new HttpProvider(cfg.ton.tonApiUrl, {
			apiKey: cfg.ton.toncenterApiKey || undefined,
		});
		this.tonweb = new this.tonwebModule(provider);
	}

	async onModuleInit() {
		try {
			// console.log('TonService initialized');
			// const address = 'UQC_yH5An22htsx0yOt__orGDks_Pxv7kyUiM_pS77nbLe6o';
			// console.log('Getting payments for address:', address);
			// const payments = await this.getIncomingPayments(address);
			// console.log('Found payments:', payments.length);
			// console.log(payments);
		} catch (error) {
			console.error('Error in onModuleInit:', error);
		}
	}

	
	async findTransactionByPaymentData(
		fromAddress: string,
		amount: number,
		toAddress?: string,
		timeWindowMinutes: number = 10
	): Promise<Payment | null> {
		try {
			const targetAddress = toAddress || cfg.ton.walletAddress;
			const transactions = await this.getTransactions(targetAddress);

			// Конвертируем сумму в нанотоны для сравнения
			const amountInNano = Math.floor(amount * 1_000_000_000);
			const amountBN = new BN(amountInNano.toString());

			// Временное окно для поиска (транзакции за последние N минут)
			const timeWindow = timeWindowMinutes * 60 * 1000;
			const now = Date.now();
			const minTime = now - timeWindow;

			// Нормализуем адрес отправителя
			let fromAddressStr = '';
			try {
				const Address = this.tonwebModule.utils?.Address || this.tonwebModule.Address;
				const fromObj = new Address(fromAddress);
				fromAddressStr = fromObj.toString(true, true, false);
			} catch {
				fromAddressStr = fromAddress.replace(/-/g, '').toUpperCase();
			}

			// Нормализуем адрес получателя
			let targetAddressStr = '';
			try {
				const Address = this.tonwebModule.utils?.Address || this.tonwebModule.Address;
				const targetObj = new Address(targetAddress);
				targetAddressStr = targetObj.toString(true, true, false);
			} catch {
				targetAddressStr = targetAddress.replace(/-/g, '').toUpperCase();
			}

			// Ищем транзакцию, которая соответствует критериям
			for (const tx of transactions) {
				// Проверяем время транзакции
				const txTime = tx.utime ? tx.utime * 1000 : 0;
				if (txTime < minTime) {
					continue; // Транзакция слишком старая
				}

				if (tx.in_msg) {
					const inMsg = tx.in_msg;
					const destAddress = inMsg.destination?.address || inMsg.destination;
					
					if (!destAddress) continue;

					// Проверяем адрес получателя
					let destAddressStr = '';
					try {
						const Address = this.tonwebModule.utils?.Address || this.tonwebModule.Address;
						const destObj = new Address(destAddress);
						destAddressStr = destObj.toString(true, true, false);
					} catch {
						destAddressStr = (destAddress?.address || destAddress || '').replace(/-/g, '').toUpperCase();
					}

					if (destAddressStr !== targetAddressStr) {
						continue;
					}

					// Проверяем адрес отправителя
					const sourceAddress = inMsg.source?.address || inMsg.source;
					if (!sourceAddress) continue;

					let sourceAddrStr = '';
					try {
						const Address = this.tonwebModule.utils?.Address || this.tonwebModule.Address;
						const sourceObj = new Address(sourceAddress);
						sourceAddrStr = sourceObj.toString(true, true, false);
					} catch {
						sourceAddrStr = (sourceAddress?.address || sourceAddress || '').replace(/-/g, '').toUpperCase();
					}

					if (sourceAddrStr !== fromAddressStr) {
						continue;
					}

					// Проверяем сумму
					const value = inMsg.value || '0';
					const txAmountBN = new BN(value, 10);
					
					// Сравниваем суммы (допускаем небольшую погрешность)
					if (txAmountBN.eq(amountBN) || txAmountBN.eq(amountBN.sub(new BN(1))) || txAmountBN.eq(amountBN.add(new BN(1)))) {
						// Нашли подходящую транзакцию
						const payment = await this.processTonPayment(tx, inMsg, targetAddress);
						if (payment) {
							return payment;
						}
					}
				}
			}

			return null;
		} catch (error: any) {
			console.error('Error finding transaction by payment data:', error.message);
			return null;
		}
	}

	async getIncomingPayments(address?: string): Promise<Payment[]> {
		const targetAddress = address || cfg.ton.walletAddress;
		const payments: Payment[] = [];

		const transactions = await this.getTransactions(targetAddress);

		let targetAddressStr = '';
		try {
			const Address = this.tonwebModule.utils?.Address || this.tonwebModule.Address;
			const targetAddressObj = new Address(targetAddress);
			targetAddressStr = targetAddressObj.toString(true, true, false);
		} catch {
			targetAddressStr = targetAddress.replace(/-/g, '').toUpperCase();
		}

		console.log(`Processing ${transactions.length} transactions, target address: ${targetAddressStr}`);
		
		for (const tx of transactions) {
			if (tx.in_msg) {
				const inMsg = tx.in_msg;
				const destAddress = inMsg.destination?.address || inMsg.destination;

				if (destAddress) {
					try {
						const Address = this.tonwebModule.utils?.Address || this.tonwebModule.Address;
						let destAddressStr = '';
						try {
							const destAddressObj = new Address(destAddress);
							destAddressStr = destAddressObj.toString(true, true, false);
						} catch {
							destAddressStr = (destAddress?.address || destAddress || '').replace(/-/g, '').toUpperCase();
						}

						if (!destAddressStr || destAddressStr !== targetAddressStr) {
							continue;
						}
						
						const sourceAddress = inMsg.source?.address || inMsg.source;
						
						if (!sourceAddress) {
							const tonPayment = await this.processTonPayment(tx, inMsg, targetAddress);
							if (tonPayment) {
								payments.push(tonPayment);
							}
							continue;
						}

						try {
							const Address = this.tonwebModule.utils?.Address || this.tonwebModule.Address;
							let sourceAddrStr = '';
							try {
								const sourceAddrObj = new Address(sourceAddress);
								sourceAddrStr = sourceAddrObj.toString(true, true, false);
							} catch {
								sourceAddrStr = (sourceAddress?.address || sourceAddress || '').replace(/-/g, '').toUpperCase();
							}

							if (this.jettonWalletCache.has(sourceAddrStr)) {
								const cachedJettonAddress = this.jettonWalletCache.get(sourceAddrStr);
								if (cachedJettonAddress) {
									const jettonPayments = await this.processTransferNotification(tx, inMsg, targetAddress);
									if (jettonPayments.length > 0) {
										payments.push(...jettonPayments);
										continue;
									}
								}
							} else {
								const jettonAddress = await this.getJettonAddressFromSource(sourceAddrStr);
								this.jettonWalletCache.set(sourceAddrStr, jettonAddress);
								
								if (jettonAddress) {
									const jettonPayments = await this.processTransferNotification(tx, inMsg, targetAddress);
									if (jettonPayments.length > 0) {
										payments.push(...jettonPayments);
										continue;
									}
								}
							}
						} catch (error) {
							console.log('Error checking source for Jetton:', error);
						}

						const tonPayment = await this.processTonPayment(tx, inMsg, targetAddress);
						if (tonPayment) {
							payments.push(tonPayment);
						}
					} catch {
						continue;
					}
				}
			}

			if (tx.out_msgs && Array.isArray(tx.out_msgs)) {
				for (const outMsg of tx.out_msgs) {
					const destAddress = outMsg.destination?.address || outMsg.destination;
					if (!destAddress) continue;

					try {
						const Address = this.tonwebModule.utils?.Address || this.tonwebModule.Address;
						let destAddressStr = '';
						try {
							const destAddressObj = new Address(destAddress);
							destAddressStr = destAddressObj.toString(true, true, false);
						} catch {
							destAddressStr = (destAddress?.address || destAddress || '').replace(/-/g, '').toUpperCase();
						}

						if (!destAddressStr || destAddressStr !== targetAddressStr) {
							continue;
						}

						const sourceAddress = outMsg.source?.address || outMsg.source;
						if (sourceAddress) {
							try {
								const Address = this.tonwebModule.utils?.Address || this.tonwebModule.Address;
								let sourceAddrStr = '';
								try {
									const sourceAddrObj = new Address(sourceAddress);
									sourceAddrStr = sourceAddrObj.toString(true, true, false);
								} catch {
									sourceAddrStr = (sourceAddress?.address || sourceAddress || '').replace(/-/g, '').toUpperCase();
								}

								const jettonAddress = await this.getJettonAddressFromSource(sourceAddrStr);
								if (jettonAddress) {
									console.log('Source in out_msg is Jetton wallet, jetton address:', jettonAddress);
									const jettonPayments = await this.processTransferNotification(tx, outMsg, targetAddress);
									if (jettonPayments.length > 0) {
										payments.push(...jettonPayments);
									}
								}
							} catch (error) {
								console.log('Error checking source in out_msg for Jetton:', error);
							}
						}
					} catch {
						continue;
					}
				}
			}
		}

		return payments;
	}

	private async getTransactions(address: string): Promise<any[]> {
		try {
			let finalAddress = address;

			try {
				const Address = this.tonwebModule.utils?.Address || this.tonwebModule.Address;
				let addrToParse = address;
				if (addrToParse.includes('_')) {
					addrToParse = addrToParse.replace(/_+/g, '-').replace(/--+/g, '-');
				}
				
				const addressObj = new Address(addrToParse);
				finalAddress = addressObj.toString(false, false, false);
			} catch (parseError) {
				try {
					const Address = this.tonwebModule.utils?.Address || this.tonwebModule.Address;
					const addressObj = new Address(address);
					finalAddress = addressObj.toString(false, false, false);
				} catch {
					console.error('Failed to parse address:', address);
					finalAddress = address;
				}
			}

			console.log(`Requesting transactions for address: ${finalAddress}`);
			
			const response = await axios.get(`${this.toncenterUrl}getTransactions`, {
				params: {
					address: finalAddress,
					limit: 100,
					to_lt: 0,
					archival: true,
					api_key: cfg.ton.toncenterApiKey || undefined,
				},
			});

			const transactions = response.data?.result || [];
			console.log(`Found ${transactions.length} transactions for address ${finalAddress}`);
			return transactions;
		} catch (error: any) {
			console.error('Error getting transactions:', error.message);
			if (error.response) {
				console.error('Response data:', error.response.data);
			}
			return [];
		}
	}

	private async getTransactionBoc(txHash: string, accountAddress: string, lt: string): Promise<string | null> {
		try {
			if (!txHash || !accountAddress) {
				return null;
			}

			// Используем tonweb для получения BOC транзакции
			try {
				const Address = this.tonwebModule.utils?.Address || this.tonwebModule.Address;
				const addressObj = new Address(accountAddress);
				const addressStr = addressObj.toString(false, false, false);
				
				const transactions = await this.tonweb.provider.getTransactions(addressStr, 1, undefined, lt);
				if (transactions && transactions.length > 0) {
					const tx = transactions[0];
					// Проверяем, что это нужная транзакция по хэшу
					if (tx.transaction_id?.hash === txHash) {
						if (tx.data) {
							return tx.data;
						}
						// Пытаемся получить BOC через tonweb
						if (this.tonwebModule.boc) {
							try {
								const Cell = this.tonwebModule.boc.Cell;
								if (tx.transaction) {
									const boc = Cell.fromBOC(tx.transaction);
									return boc.toString('base64');
								}
							} catch {}
						}
					}
				}
			} catch (tonwebError) {
				console.log('Failed to get BOC via tonweb:', tonwebError);
			}

			// Альтернативный способ через API - используем tryLocateTx
			try {
				const response = await axios.get(`${this.toncenterUrl}tryLocateTx`, {
					params: {
						source: accountAddress,
						destination: accountAddress,
						created_lt: lt,
						api_key: cfg.ton.toncenterApiKey || undefined,
					},
				});

				if (response.data?.result && response.data.result.data) {
					return response.data.result.data;
				}
			} catch (apiError) {
				console.log('Failed to get BOC via tryLocateTx:', apiError);
			}

			return null;
		} catch (error: any) {
			console.error('Error getting transaction BOC:', error.message);
			return null;
		}
	}

	private async processTonPayment(tx: any, inMsg: any, targetAddress?: string): Promise<Payment | null> {
		const value = inMsg.value || '0';
		if (!value || value === '0') return null;

		const rawAmount = new BN(value, 10);
		if (rawAmount.isZero()) return null;

		const divisor = new BN(10).pow(new BN(this.TON_DECIMALS));
		const amountBN = rawAmount.div(divisor);
		const remainderBN = rawAmount.mod(divisor);
		const amountFormatted = amountBN.toNumber() + remainderBN.toNumber() / divisor.toNumber();

		const sourceAddr = inMsg.source || '';
		const destAddr = inMsg.destination?.address || inMsg.destination || '';

		let fromStr = '';
		let toStr = '';

		try {
			const Address = this.tonwebModule.utils?.Address || this.tonwebModule.Address;
			if (sourceAddr) {
				try {
					const fromObj = new Address(sourceAddr);
					fromStr = fromObj.toString(true, true, false);
				} catch {}
			}
			if (destAddr) {
				try {
					const toObj = new Address(destAddr);
					toStr = toObj.toString(true, true, false);
				} catch {}
			}
		} catch {}

		const txHash = tx.transaction_id?.hash || '';
		const lt = tx.transaction_id?.lt || '';
		
		// Получаем BOC транзакции асинхронно
		let boc: string | undefined = tx.data || tx.boc || undefined;
		if (!boc && txHash && targetAddress && lt) {
			boc = await this.getTransactionBoc(txHash, targetAddress, lt) || undefined;
		}

		return {
			txHash: txHash,
			from: fromStr,
			to: toStr,
			amount: amountFormatted.toString(),
			rawAmount: rawAmount.toString(),
			asset: 'TON',
			blockTime: tx.utime ? tx.utime * 1000 : undefined,
			boc: boc,
		};
	}

	private async processTransferNotification(tx: any, inMsg: any, targetAddress: string): Promise<Payment[]> {
		const payments: Payment[] = [];

		try {
			const sourceAddress = inMsg.source?.address || inMsg.source || '';
			if (!sourceAddress) {
				console.log('No source address in transfer_notification');
				return payments;
			}

			console.log('Processing transfer_notification from source:', sourceAddress);
			const jettonAddress = await this.getJettonAddressFromSource(sourceAddress);
			if (!jettonAddress) {
				console.log('Could not determine jetton address from source:', sourceAddress);
				return payments;
			}
			console.log('Found jetton address:', jettonAddress);

			let amountStr = '0';
			let fromAddress = '';

			if (inMsg.msg_data && inMsg.msg_data['@type'] === 'msg.dataRaw' && inMsg.msg_data.body) {
				try {
					const msgBody = Buffer.from(inMsg.msg_data.body, 'base64');
					const Cell = this.tonwebModule.boc?.Cell;
					if (Cell && Cell.oneFromBoc) {
						const cell = Cell.oneFromBoc(msgBody);
						const slice = cell.beginParse();
						const op = slice.loadUint(32);
						
						if (op.toNumber() === 0x7362d09c) {
							slice.loadUint(64);
							const amount = slice.loadCoins();
							amountStr = amount.toString();
							const from = slice.loadAddress();
							fromAddress = from ? from.toString(true, true, false) : '';
							console.log('Parsed from BOC: amount=', amountStr, 'from=', fromAddress);
						}
					}
				} catch (bocError) {
					console.log('BOC parsing failed:', bocError.message || bocError);
				}
			}
			
			if (!amountStr || amountStr === '0') {
				const body = inMsg.decoded_body;
				amountStr = body?.amount || body?.value || '0';
				fromAddress = sourceAddress;
				if (body) {
					console.log('Using decoded_body: amount=', amountStr);
				}
			}
			
			if (!fromAddress) {
				fromAddress = sourceAddress;
			}

			const amountBN = new BN(amountStr, 10);
			if (amountBN.isZero()) return payments;

			const jettonData = await this.getJettonData(jettonAddress);
			const decimals = jettonData?.decimals || 9;

			const divisor = new BN(10).pow(new BN(decimals));
			const amountFormattedBN = amountBN.div(divisor);
			const remainderBN = amountBN.mod(divisor);
			const amountFormatted = amountFormattedBN.toNumber() + remainderBN.toNumber() / divisor.toNumber();

			let fromStr = '';
			let toStr = '';

			try {
				const Address = this.tonwebModule.utils?.Address || this.tonwebModule.Address;
				if (fromAddress) {
					try {
						const fromObj = new Address(fromAddress);
						fromStr = fromObj.toString(true, true, false);
					} catch {}
				}
				const targetAddressObj = new Address(targetAddress);
				toStr = targetAddressObj.toString(true, true, false);
			} catch {}

			const txHash = tx.transaction_id?.hash || '';
			const lt = tx.transaction_id?.lt || '';
			
			// Получаем BOC транзакции асинхронно
			let boc: string | undefined = tx.data || tx.boc || undefined;
			if (!boc && txHash && targetAddress && lt) {
				boc = await this.getTransactionBoc(txHash, targetAddress, lt) || undefined;
			}

			payments.push({
				txHash: txHash,
				from: fromStr,
				to: toStr,
				amount: amountFormatted.toString(),
				rawAmount: amountBN.toString(),
				asset: jettonAddress,
				blockTime: tx.utime ? tx.utime * 1000 : undefined,
				boc: boc,
			});
		} catch (error) {}

		return payments;
	}

	private async getJettonAddressFromSource(sourceAddress: string): Promise<string | null> {
		try {
			const Address = this.tonwebModule.utils?.Address || this.tonwebModule.Address;
			let addressStr = '';
			try {
				const addressObj = new Address(sourceAddress);
				addressStr = addressObj.toString(true, true, false);
			} catch {
				return null;
			}

			const response = await axios.post(`${this.toncenterUrl}runGetMethod`, {
				address: addressStr,
				method: 'get_wallet_data',
				stack: [],
				api_key: cfg.ton.toncenterApiKey || undefined,
			}, {
				timeout: 5000,
			});

			if (response.data?.ok === false) {
				if (response.data.error?.includes('rate limit') || response.status === 429) {
					await new Promise(resolve => setTimeout(resolve, 1000));
				}
				return null;
			}

			const masterAddressCell = response.data?.result?.stack?.[0];
			if (masterAddressCell && masterAddressCell[1]) {
				try {
					const addrData = masterAddressCell[1];
					let addressStrResult = '';
					
					if (addrData.bytes) {
						const bytes = Buffer.from(addrData.bytes, 'base64');
						if (bytes.length === 36) {
							const workchain = bytes.readInt8(0);
							const hashPart = Array.from(bytes.slice(1, 33))
								.map(b => b.toString(16).padStart(2, '0'))
								.join('');
							const addrString = `${workchain}:${hashPart}`;
							const Address = this.tonwebModule.utils?.Address || this.tonwebModule.Address;
							try {
															const masterAddrObj = new Address(addrString);
							addressStrResult = masterAddrObj.toString(true, true, false);
							return addressStrResult;
						} catch {}
					}
					} else if (addrData.address) {
						const Address = this.tonwebModule.utils?.Address || this.tonwebModule.Address;
						try {
							const masterAddrObj = new Address(addrData.address);
							addressStrResult = masterAddrObj.toString(true, true, false);
							return addressStrResult;
						} catch {}
					}
				} catch {}
			}

			return null;
		} catch (error: any) {
			if (error.response?.status !== 429) {
				console.log('Error in getJettonAddressFromSource:', error.message || error);
			}
			return null;
		}
	}

	private async getJettonData(jettonAddress: string): Promise<{ decimals: number } | null> {
		try {
			const Address = this.tonwebModule.utils?.Address || this.tonwebModule.Address;
			let addressStr = '';
			try {
				const addressObj = new Address(jettonAddress);
				addressStr = addressObj.toString(true, true, false);
			} catch {
				return { decimals: 9 };
			}

			const response = await axios.post(`${this.toncenterUrl}runGetMethod`, {
				address: addressStr,
				method: 'get_jetton_data',
				stack: [],
				api_key: cfg.ton.toncenterApiKey || undefined,
			});

			const decimalsHex = response.data?.result?.stack?.[2]?.[1]?.hex;
			if (decimalsHex) {
				return {
					decimals: parseInt(decimalsHex, 16),
				};
			}

			return { decimals: 9 };
		} catch (error) {
			return { decimals: 9 };
		}
	}
}
