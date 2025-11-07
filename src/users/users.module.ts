import { Module } from '@nestjs/common';

import { UsersService } from './services/users.service';
import { UsersRespository } from './respositories/users.respository';
import { DeveloperProfileRespository } from './respositories/developer-profile.respository';
import { EmployerProfileRespository } from './respositories/employer-profile.respository';

@Module({
	providers: [
		
		UsersService,
		UsersRespository,
		DeveloperProfileRespository,
		EmployerProfileRespository,
	],
	exports: [ UsersService],
})
export class UsersModule {}

