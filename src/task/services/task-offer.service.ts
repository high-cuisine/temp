import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';

import { TaskOfferRepository } from '../repositories/task-offer.repository';

@Injectable()
export class TaskOfferService {
	constructor(private readonly taskOfferRepository: TaskOfferRepository) {}

	async getOfferById(offerId: number) {
		if (!Number.isInteger(offerId) || offerId <= 0) {
			throw new BadRequestException('Invalid offer id');
		}

		const offer = await this.taskOfferRepository.getById(offerId);
		if (!offer) {
			throw new NotFoundException(`Task offer with id ${offerId} not found`);
		}

		return offer;
	}
}