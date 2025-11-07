import { Injectable } from '@nestjs/common';
import { Ctx, Scene, SceneEnter, On, Command } from 'nestjs-telegraf';
import { Markup } from 'telegraf';
import { SceneContext } from 'telegraf/typings/scenes';
import { UsersService } from '../../../../users/services/users.service';
import { SKILLS } from '../../../constants/stacks.contant';
import { PlankaService } from '@infra/planka/Planka.service';

// Определяем интерфейс сессии для сцены
interface RegisterSceneSession {
	step: 'name' | 'email' | 'role' | 'developer_skills' | 'developer_rate' | 'employer_company' | 'employer_description' | 'employer_website' | 'employer_contact' | 'employer_planka_mode' | 'employer_planka_email' | 'employer_planka_password' | 'confirm';
	name?: string;
	email?: string;
	role?: 'DEVELOPER' | 'EMPLOYER';
	
	skills?: string[];
	hourlyRate?: number;
	skillsPath?: string[]; // Путь навигации по стеку (например: ['Software developer', 'Frontend'])

	companyName?: string;
	description?: string;
	website?: string;
	contactEmail?: string;
	plankaMode?: 'CREATE_NEW' | 'CONNECT_EXISTING';
	plankaEmail?: string;
	plankaToken?: string;
	plankaExternalUserId?: string | null;
}

@Injectable()
@Scene('register')
export class RegisterScene {
	constructor(
		private readonly usersService: UsersService,
		private readonly plankaService: PlankaService,
	) {}

	// Получить текущий объект по пути
	private getCurrentLevel(path: string[]): any {
		let current: any = SKILLS;
		for (const key of path) {
			if (current && typeof current === 'object' && current[key] !== undefined) {
				current = current[key];
			} else {
				return null;
			}
		}
		return current;
	}

	// Получить все ключи текущего уровня
	private getKeysAtLevel(path: string[]): string[] {
		const level = this.getCurrentLevel(path);
		if (!level || typeof level !== 'object') {
			return [];
		}
		return Object.keys(level);
	}

	// Проверить, является ли значение конечным навыком (null)
	private isFinalSkill(path: string[]): boolean {
		const level = this.getCurrentLevel(path);
		return level === null;
	}

	// Получить полный путь навыка как строку
	private getSkillPathString(path: string[]): string {
		return path.join(' / ');
	}

	// Отобразить меню выбора стека
	private async showSkillsMenu(ctx: SceneContext, session: RegisterSceneSession, isUpdate: boolean = false) {
		if (!session.skills) {
			session.skills = [];
		}
		if (!session.skillsPath) {
			session.skillsPath = [];
		}

		const path = session.skillsPath;
		const keys = this.getKeysAtLevel(path);

		if (keys.length === 0 && path.length > 0) {
			// Достигли конечного навыка
			const skillPath = this.getSkillPathString(path);
			if (!session.skills.includes(skillPath)) {
				session.skills.push(skillPath);
			}
			// Возвращаемся на уровень выше
			path.pop();
			session.skillsPath = path;
		}

		// Формируем сообщение
		let message = '<b>💻 Выберите навыки</b>\n\n';
		if (session.skills.length > 0) {
			message += '<b>Выбранные навыки:</b>\n';
			session.skills.forEach((skill, index) => {
				message += `${index + 1}. ${skill}\n`;
			});
			message += '\n';
		}

		if (path.length > 0) {
			message += `<b>Текущий путь:</b> ${this.getSkillPathString(path)}\n\n`;
		}

		// Формируем кнопки
		const buttons: any[] = [];
		const currentKeys = this.getKeysAtLevel(path);

		if (currentKeys.length === 0) {
			message += 'Нет доступных опций на этом уровне.\n';
		} else {
			// Группируем кнопки по 2 в ряд
			for (let i = 0; i < currentKeys.length; i += 2) {
				const row: any[] = [];
				row.push(Markup.button.callback(currentKeys[i], `skill_${i}`));
				if (i + 1 < currentKeys.length) {
					row.push(Markup.button.callback(currentKeys[i + 1], `skill_${i + 1}`));
				}
				buttons.push(row);
			}
		}

		// Добавляем кнопки навигации
		const navButtons: any[] = [];
		if (path.length > 0) {
			navButtons.push(Markup.button.callback('◀️ Назад', 'skill_back'));
		}
		if (session.skills.length > 0) {
			navButtons.push(Markup.button.callback('✅ Завершить выбор', 'skill_done'));
		}
		if (navButtons.length > 0) {
			buttons.push(navButtons);
		}

		const keyboard = Markup.inlineKeyboard(buttons);

		if (isUpdate && ctx.callbackQuery) {
			try {
				await ctx.editMessageText(message, {
					reply_markup: keyboard.reply_markup,
					parse_mode: 'HTML',
				});
			} catch (error) {
				// Если не удалось обновить, отправляем новое сообщение
				await ctx.replyWithHTML(message, keyboard);
			}
		} else {
			await ctx.replyWithHTML(message, keyboard);
		}
	}

	// Метод для отображения подтверждения данных
	private async showConfirmMessage(ctx: SceneContext, session: RegisterSceneSession) {
		const telegramId = ctx.from?.id;
		const tgUsername = ctx.from?.username || null;

		if (!telegramId) {
			await ctx.reply('Ошибка: не удалось получить ID пользователя. Попробуйте еще раз.');
			await ctx.scene.leave();
			return;
		}

		let message = '<b>Проверьте введенные данные:</b>\n\n' +
			`👤 Имя: <b>${session.name}</b>\n` +
			`📧 Email: <b>${session.email}</b>\n` +
			`🎭 Роль: <b>${session.role === 'DEVELOPER' ? 'Разработчик' : 'Работодатель'}</b>\n`;

		if (session.role === 'DEVELOPER') {
			message += `💻 Навыки: <b>${session.skills?.join(', ') || 'Не указано'}</b>\n`;
			message += `💰 Почасовая ставка: <b>$${session.hourlyRate || 'Не указано'}</b>\n`;
		} else if (session.role === 'EMPLOYER') {
			message += `🏢 Компания: <b>${session.companyName || 'Не указано'}</b>\n`;
			message += `📝 Описание: <b>${session.description?.substring(0, 50) || 'Не указано'}${session.description && session.description.length > 50 ? '...' : ''}</b>\n`;
			message += `🌐 Сайт: <b>${session.website || 'Не указано'}</b>\n`;
			message += `📧 Контактный email: <b>${session.contactEmail || 'Не указано'}</b>\n`;
			const plankaModeLabel = session.plankaMode === 'CONNECT_EXISTING'
				? 'Подключить существующий'
				: session.plankaMode === 'CREATE_NEW'
					? 'Создать новый'
					: 'Не выбрано';
			message += `📦 Аккаунт Planka: <b>${plankaModeLabel}</b>\n`;
			if (session.plankaMode === 'CONNECT_EXISTING') {
				message += `🔐 Статус доступа: <b>${session.plankaToken ? 'Подключен' : 'Не авторизован'}</b>\n`;
			}
			if (session.plankaEmail) {
				message += `📨 Email для Planka: <b>${session.plankaEmail}</b>\n`;
			}
		}

		message += `🆔 Telegram ID: <b>${telegramId}</b>\n`;
		if (tgUsername) {
			message += `👤 Username: <b>@${tgUsername}</b>\n`;
		}
		message += '\nВсе верно?';

		const keyboard = Markup.inlineKeyboard([
			[Markup.button.callback('✅ Подтвердить', 'confirm')],
			[Markup.button.callback('❌ Отменить', 'cancel')],
		]);

		await ctx.replyWithHTML(message, keyboard);
	}

	// Обработчик входа в сцену
	@SceneEnter()
	async onSceneEnter(@Ctx() ctx: SceneContext) {
		// Инициализация сессии
		if (!ctx.session) {
			ctx.session = {};
		}

		if (!ctx.session['register']) {
			ctx.session['register'] = {} as RegisterSceneSession;
		}

		const session = ctx.session['register'] as RegisterSceneSession;
		session.step = 'name';
		session.plankaMode = undefined;
		session.plankaEmail = undefined;
		session.plankaToken = undefined;
		session.plankaExternalUserId = undefined;

		const keyboard = Markup.keyboard([['❌ Отмена']])
			.resize()
			.oneTime();

		await ctx.replyWithHTML(
			'<b>📝 Регистрация</b>\n\n' +
			'Давайте начнем процесс регистрации.\n' +
			'Введите ваше имя:',
			keyboard,
		);
	}

	// Обработчик текстовых сообщений
	@On('text')
	async onText(@Ctx() ctx: SceneContext) {
		const session = ctx.session['register'] as RegisterSceneSession;
		const text = (ctx.message as any).text;

		// Проверка на отмену
		if (text === '❌ Отмена' || text === '/cancel') {
			await ctx.reply('Регистрация отменена', Markup.removeKeyboard());
			await ctx.scene.leave();
			return;
		}

		switch (session.step) {
			case 'name':
				if (text.length < 2) {
					await ctx.reply('Имя должно содержать минимум 2 символа. Попробуйте еще раз:');
					return;
				}
				session.name = text;
				session.step = 'email';
				await ctx.replyWithHTML(
					'<b>Отлично!</b> ✅\n\n' +
					'Теперь введите ваш email:',
				);
				break;

			case 'email':
				// Простая валидация email
				const emailRegexPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
				if (!emailRegexPattern.test(text)) {
					await ctx.reply('Некорректный email. Попробуйте еще раз:');
					return;
				}
				session.email = text;
				session.step = 'role';
				
				const roleKeyboard = Markup.keyboard([
					['👨‍💻 Разработчик (DEVELOPER)'],
					['👔 Работодатель (EMPLOYER)'],
				])
					.resize()
					.oneTime();

				await ctx.replyWithHTML(
					'<b>Отлично!</b> ✅\n\n' +
					'Теперь выберите вашу роль:',
					roleKeyboard,
				);
				break;

			case 'role':
				if (text.includes('Разработчик') || text.includes('DEVELOPER')) {
					session.role = 'DEVELOPER';
					session.step = 'developer_skills';
					session.skills = [];
					session.skillsPath = [];
					await this.showSkillsMenu(ctx, session);
				} else if (text.includes('Работодатель') || text.includes('EMPLOYER')) {
					session.role = 'EMPLOYER';
					session.step = 'employer_company';
					await ctx.replyWithHTML(
						'<b>Отлично!</b> ✅\n\n' +
						'Введите название вашей компании:',
					);
				} else {
					await ctx.reply('Пожалуйста, выберите роль из предложенных вариантов:');
					return;
				}
				break;

			case 'developer_skills':
				// Этот шаг обрабатывается через callback_query, не через текст
				break;

			case 'developer_rate':
				const rate = parseFloat(text.replace(',', '.'));
				if (isNaN(rate) || rate <= 0) {
					await ctx.reply('Некорректная ставка. Введите положительное число. Попробуйте еще раз:');
					return;
				}
				session.hourlyRate = rate;
				session.step = 'confirm';
				await this.showConfirmMessage(ctx, session);
				break;

			case 'employer_company':
				if (text.trim().length < 2) {
					await ctx.reply('Название компании должно содержать минимум 2 символа. Попробуйте еще раз:');
					return;
				}
				session.companyName = text.trim();
				session.step = 'employer_description';
				await ctx.replyWithHTML(
					'<b>Отлично!</b> ✅\n\n' +
					'Введите описание вашей компании:',
				);
				break;

			case 'employer_description':
				if (text.trim().length < 10) {
					await ctx.reply('Описание должно содержать минимум 10 символов. Попробуйте еще раз:');
					return;
				}
				session.description = text.trim();
				session.step = 'employer_website';
				await ctx.replyWithHTML(
					'<b>Отлично!</b> ✅\n\n' +
					'Введите адрес вашего сайта (или оставьте пустым, нажав "Пропустить"):\n' +
					'Например: <i>https://example.com</i>',
					Markup.keyboard([['⏭ Пропустить']]).resize().oneTime(),
				);
				break;

			case 'employer_website':
				if (text === '⏭ Пропустить' || text === '/skip') {
					session.website = undefined;
				} else {
					// Простая валидация URL
					const urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
					if (!urlRegex.test(text) && text.trim().length > 0) {
						await ctx.reply('Некорректный URL. Попробуйте еще раз или нажмите "Пропустить":');
						return;
					}
					session.website = text.trim() || undefined;
				}
				session.step = 'employer_contact';
				await ctx.replyWithHTML(
					'<b>Отлично!</b> ✅\n\n' +
					'Введите контактный email для связи:',
					Markup.keyboard([['❌ Отмена']]).resize().oneTime(),
				);
				break;

			case 'employer_contact':
				const contactEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
				if (!contactEmailRegex.test(text)) {
					await ctx.reply('Некорректный email. Попробуйте еще раз:');
					return;
				}
				session.contactEmail = text;
				session.step = 'employer_planka_mode';
				await ctx.replyWithHTML(
					'<b>Planka интеграция</b>\n\n' +
					'У вас уже есть аккаунт Planka для управления задачами?\n' +
					'Выберите действие:',
					Markup.inlineKeyboard([
						[Markup.button.callback('Создать новый аккаунт', 'planka_mode_create')],
						[Markup.button.callback('Подключить существующий', 'planka_mode_connect')],
					]),
				);
				break;

			case 'employer_planka_email': {
				const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
				if (!emailRegex.test(text)) {
					await ctx.reply('Некорректный email. Пожалуйста, введите корректный email аккаунта Planka:');
					return;
				}
				session.plankaEmail = text.trim();
				session.plankaToken = undefined;
				session.plankaExternalUserId = undefined;
				if (session.plankaMode === 'CONNECT_EXISTING') {
					session.step = 'employer_planka_password';
					await ctx.replyWithHTML('<b>Введите пароль от аккаунта Planka</b>');
				} else {
					session.step = 'confirm';
					await this.showConfirmMessage(ctx, session);
				}
				break;
			}

			case 'employer_planka_password': {
				if (!text || text.trim().length < 4) {
					await ctx.reply('Пароль слишком короткий. Попробуйте снова:');
					return;
				}
				if (!session.plankaEmail) {
					session.step = 'employer_planka_email';
					await ctx.reply('Сначала укажите email аккаунта Planka.');
					return;
				}

				await ctx.reply('🔐 Проверяем доступ к Planka...');
				const authResult = await this.plankaService.login(session.plankaEmail, text.trim());
				if (!authResult) {
					await ctx.reply('Не удалось авторизоваться в Planka. Проверьте данные и попробуйте снова.');
					return;
				}

				session.plankaToken = authResult.token;
				session.plankaExternalUserId = authResult.userId || null;
				session.step = 'confirm';
				await ctx.reply('✅ Аккаунт Planka подключен.');
				await this.showConfirmMessage(ctx, session);
				break;
			}
		}
	}

	// Обработчик callback_query
	@On('callback_query')
	async onCallbackQuery(@Ctx() ctx: SceneContext) {
		const callbackData = (ctx.callbackQuery as any).data;
		const session = ctx.session['register'] as RegisterSceneSession;

		await ctx.answerCbQuery();

		// Обработка навигации по стеку
		if (session.step === 'developer_skills') {
			if (callbackData === 'skill_back') {
				if (session.skillsPath && session.skillsPath.length > 0) {
					session.skillsPath.pop();
					await this.showSkillsMenu(ctx, session, true);
				}
				return;
			}

			if (callbackData === 'skill_done') {
				if (!session.skills || session.skills.length === 0) {
					await ctx.reply('Пожалуйста, выберите хотя бы один навык.');
					await this.showSkillsMenu(ctx, session, false);
					return;
				}
				session.step = 'developer_rate';
				try {
					await ctx.editMessageText(
						'<b>Отлично!</b> ✅\n\n' +
						`Вы выбрали навыки: <b>${session.skills.join(', ')}</b>\n\n` +
						'Теперь введите вашу почасовую ставку (в долларах):\n' +
						'Например: <i>50</i> или <i>25.5</i>',
						{ parse_mode: 'HTML' },
					);
				} catch (error) {
					await ctx.replyWithHTML(
						'<b>Отлично!</b> ✅\n\n' +
						`Вы выбрали навыки: <b>${session.skills.join(', ')}</b>\n\n` +
						'Теперь введите вашу почасовую ставку (в долларах):\n' +
						'Например: <i>50</i> или <i>25.5</i>',
					);
				}
				return;
			}

			if (callbackData.startsWith('skill_')) {
				const index = parseInt(callbackData.replace('skill_', ''));
				if (!isNaN(index)) {
					const path = session.skillsPath || [];
					const keys = this.getKeysAtLevel(path);
					
					if (index >= 0 && index < keys.length) {
						const selectedKey = keys[index];
						const newPath = [...path, selectedKey];
						
						// Проверяем, является ли это конечным навыком
						const testLevel = this.getCurrentLevel(newPath);
						if (testLevel === null) {
							// Это конечный навык, добавляем его
							const skillPath = this.getSkillPathString(newPath);
							if (!session.skills) {
								session.skills = [];
							}
							if (!session.skills.includes(skillPath)) {
								session.skills.push(skillPath);
							}
							// Возвращаемся на уровень выше
							session.skillsPath = path;
						} else {
							// Переходим на следующий уровень
							session.skillsPath = newPath;
						}
						await this.showSkillsMenu(ctx, session, true);
					}
				}
				return;
			}
		}

		if (session.step === 'employer_planka_mode') {
			if (callbackData === 'planka_mode_create' || callbackData === 'planka_mode_connect') {
				session.plankaMode = callbackData === 'planka_mode_create' ? 'CREATE_NEW' : 'CONNECT_EXISTING';
				session.plankaEmail = undefined;
				session.plankaToken = undefined;
				session.plankaExternalUserId = undefined;
				session.step = 'employer_planka_email';
				const defaultEmail = session.email || session.contactEmail || '';
				const modeMessage = callbackData === 'planka_mode_create'
					? '<b>Создание нового аккаунта Planka</b>'
					: '<b>Подключение существующего аккаунта Planka</b>';
				const prompt =
					`${modeMessage}\n\n` +
					'Введите email, который будет использоваться в Planka.' +
					(defaultEmail ? `\nМожете использовать email из регистрации: <code>${defaultEmail}</code>` : '');
				try {
					await ctx.editMessageText(prompt, { parse_mode: 'HTML' });
				} catch (error) {
					await ctx.replyWithHTML(prompt);
				}
				return;
			}

			return;
		}

		if (callbackData === 'confirm') {
			try {
				// Получаем telegramId и tgUsername из контекста
				const telegramId = ctx.from?.id;
				const tgUsername = ctx.from?.username || null;

				if (!telegramId || !session.name || !session.email || !session.role) {
					await ctx.reply('Ошибка: не все данные заполнены. Попробуйте начать регистрацию заново.');
					await ctx.scene.leave();
					return;
				}

				if (session.role === 'EMPLOYER' && session.plankaMode === 'CONNECT_EXISTING' && !session.plankaToken) {
					await ctx.reply('Для подключения Planka необходимо успешно авторизоваться. Введите корректный пароль или выберите другой вариант.');
					return;
				}

				// Проверяем, не зарегистрирован ли уже пользователь
				const existingUser = await this.usersService.getUserByTelegramId(telegramId);
				if (existingUser) {
					await ctx.replyWithHTML(
						'<b>⚠️ Вы уже зарегистрированы!</b>\n\n' +
						`Добро пожаловать, <b>${existingUser.displayName}</b>!`,
						Markup.removeKeyboard(),
					);
					delete ctx.session['register'];
					await ctx.scene.leave();
					return;
				}

				// Подготавливаем данные профиля в зависимости от роли
				let developerProfileData: { hourlyRate: number, skills: string[], walletAddress?: string | null, bio?: string | null } | undefined = undefined;
				let employerProfileData: {
					companyName?: string | null,
					description?: string | null,
					website?: string | null,
					contactEmail?: string | null,
					plankaMode?: 'CREATE_NEW' | 'CONNECT_EXISTING' | null,
					plankaEmail?: string | null,
					plankaUserId?: string | null,
					plankaAccessToken?: string | null,
				} | undefined = undefined;

				if (session.role === 'DEVELOPER' && session.skills && session.hourlyRate) {
					developerProfileData = {
						hourlyRate: session.hourlyRate,
						skills: session.skills,
						walletAddress: null,
						bio: null,
					};
				} else if (session.role === 'EMPLOYER') {
					employerProfileData = {
						companyName: session.companyName || null,
						description: session.description || null,
						website: session.website || null,
						contactEmail: session.contactEmail || null,
						plankaMode: session.plankaMode || null,
						plankaEmail: session.plankaEmail || null,
						plankaUserId: session.plankaExternalUserId || null,
						plankaAccessToken: session.plankaToken || null,
					};
				}

				// Создаем пользователя в базе данных
				const user = await this.usersService.createUser(
					{
						telegramId: BigInt(telegramId),
						displayName: session.name,
						email: session.email,
						role: session.role,
					},
					developerProfileData,
					employerProfileData,
				);

				// Обновляем tgUsername, если он есть
				if (tgUsername && user) {
					await this.usersService.updateUser(user.id, {
						tgUsername: tgUsername,
					});
				}

				await ctx.replyWithHTML(
					'<b>🎉 Регистрация завершена успешно!</b>\n\n' +
					`Добро пожаловать, <b>${session.name}</b>!`,
					Markup.removeKeyboard(),
				);
			} catch (error) {
				console.error('Ошибка при создании пользователя:', error);
				await ctx.replyWithHTML(
					'<b>❌ Произошла ошибка при регистрации</b>\n\n' +
					'Пожалуйста, попробуйте позже или обратитесь в поддержку.',
					Markup.removeKeyboard(),
				);
			}

			// Очищаем сессию
			delete ctx.session['register'];

			await ctx.scene.leave();
		} else if (callbackData === 'cancel') {
			await ctx.reply(
				'Регистрация отменена',
				Markup.removeKeyboard(),
			);
			await ctx.scene.leave();
		}
	}

	// Выход из сцены по команде
	@Command('cancel')
	async onCancel(@Ctx() ctx: SceneContext) {
		await ctx.reply('Регистрация отменена', Markup.removeKeyboard());
		await ctx.scene.leave();
	}
}

