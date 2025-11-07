import { Module } from '@nestjs/common';
import { FeedbackCrudService } from './services/feedback-crud.service';

@Module({
	providers: [FeedbackCrudService],
	exports: [FeedbackCrudService],
})
export class FeedbackModule {}

