import { Global, Module } from '@nestjs/common';

import { AxiosModule } from '../axios/axios.module';
import { PlankaService } from './Planka.service';

@Global()
@Module({
	imports: [AxiosModule],
	providers: [PlankaService],
	exports: [PlankaService],
})
export class PlankaModule {}