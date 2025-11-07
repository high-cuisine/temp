import env from '../config.validator';

export default () => ({
	host: env.get('REDIS_HOST').required().asString(),
	port: env.get('REDIS_PORT').required().asPortNumber(),
	password: env.get('REDIS_PASSWORD').asString(),
});
