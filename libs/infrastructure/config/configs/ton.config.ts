import env from '../config.validator';

export default () => ({
	walletAddress: env.get('TON_WALLET_ADDRESS').required().asString(),
	toncenterApiKey: env.get('TONCENTER_API_KEY').asString() || '',
	tonApiUrl: env.get('TON_API_URL').asString() || 'https://toncenter.com/api/v2',
});
