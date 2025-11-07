import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { cfg } from '@infra/config';

export async function bootstrap() {

	const app = await NestFactory.create(AppModule);

	app.setGlobalPrefix('api');
	
	await app.listen(Number(cfg.app.port));
}

export default bootstrap;