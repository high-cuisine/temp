import env from '../config.validator';

export default () => ({
	port: env.get('PORT').required().asIntPositive(),
	mode: env.get('NODE_ENV').asString(),
	paymentLink: env.get('PAYMENT_LINK').required().asString(),
});
