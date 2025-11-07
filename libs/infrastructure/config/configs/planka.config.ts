import env from '../config.validator';

export default () => ({
	baseUrl: env.get('PLANKA_BASE_URL').required().asString(),
});

