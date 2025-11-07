import { Injectable, Logger } from '@nestjs/common';

import { AxiosService } from '../axios/axios.service';
import { cfg } from '../config/config.service';

interface PlankaLoginResponse {
	token?: string;
	accessToken?: string;
	item?: {
		token?: string;
	};
	jwt?: string;
}

interface PlankaUserResponse {
	item?: {
		id?: string;
	};
	id?: string;
}

@Injectable()
export class PlankaService {
	private readonly logger = new Logger(PlankaService.name);

	constructor(private readonly axiosService: AxiosService) {}

	async login(email: string, password: string): Promise<{ token: string; userId?: string } | null> {
		const baseUrl = this.getBaseUrl();
		if (!baseUrl) {
			this.logger.warn('Planka base URL is not configured. Skip login.');
			return null;
		}

		try {
			const { data } = await this.axiosService.post<PlankaLoginResponse>(
				baseUrl,
				'/api/users/login',
				undefined,
				{ email, password },
			);

			const token = this.extractToken(data);
			if (!token) {
				this.logger.error('Planka login response does not contain token');
				return null;
			}

			const user = await this.fetchCurrentUser(baseUrl, token);

			return {
				token,
				userId: user?.id,
			};
		} catch (error) {
			const message = error instanceof Error ? error.message : JSON.stringify(error);
			this.logger.error(`Failed to login to Planka for ${email}: ${message}`);
			return null;
		}
	}

	private getBaseUrl(): string | null {
		try {
			return cfg.planka.baseUrl;
		} catch (error) {
			return null;
		}
	}

	private extractToken(response: PlankaLoginResponse | null | undefined): string | null {
		if (!response) {
			return null;
		}

		return (
			response.token ||
			response.accessToken ||
			response.jwt ||
			response.item?.token ||
			null
		);
	}

	private async fetchCurrentUser(baseUrl: string, token: string): Promise<{ id?: string } | null> {
		try {
			const headers = {
				Authorization: `Bearer ${token}`,
			};

			const { data } = await this.axiosService.get<PlankaUserResponse>(
				baseUrl,
				'/api/users/me',
				headers,
			);

			return data?.item ?? (data && 'id' in data ? { id: data.id } : null);
		} catch (error) {
			const message = error instanceof Error ? error.message : JSON.stringify(error);
			this.logger.warn(`Failed to fetch current Planka user: ${message}`);
			return null;
		}
	}
}