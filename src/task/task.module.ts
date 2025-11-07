import { Module } from '@nestjs/common';
import { TaskRepository } from './repositories/task.repository';
import { TaskOfferRepository } from './repositories/task-offer.repository';
import { TaskService } from './services/task.service';
import { TaskOfferService } from './services/task-offer.service';

@Module({
	providers: [TaskRepository, TaskOfferRepository, TaskService, TaskOfferService],
	exports: [TaskService, TaskOfferService ],
})
export class TaskModule {}

