import env from '../config.validator';

export default () => ({
	botToken: env.get('TELEGRAM_BOT_TOKEN').required().asString(),
});

