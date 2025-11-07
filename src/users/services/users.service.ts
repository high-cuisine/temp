import { Injectable } from "@nestjs/common";
import { UsersRespository } from "../respositories/users.respository";
import { DeveloperProfileRespository } from "../respositories/developer-profile.respository";
import { EmployerProfileRespository } from "../respositories/employer-profile.respository";

type UserUpdateInput = Parameters<UsersRespository['update']>[1];

@Injectable()
export class UsersService {
	constructor(
		private readonly usersRespository: UsersRespository,
		private readonly developerProfileRespository: DeveloperProfileRespository,
		private readonly employerProfileRespository: EmployerProfileRespository,
	) {}

    async createUser(
        data: { telegramId: bigint, displayName: string, email: string, role: 'DEVELOPER' | 'EMPLOYER' },
        developerProfileData?: { hourlyRate: number, skills: string[], walletAddress?: string | null, bio?: string | null },
        employerProfileData?: {
            companyName?: string | null,
            description?: string | null,
            website?: string | null,
            contactEmail?: string | null,
            plankaMode?: 'CREATE_NEW' | 'CONNECT_EXISTING' | null,
            plankaEmail?: string | null,
            plankaUserId?: string | null,
            plankaAccessToken?: string | null,
        },
    ) {
        const user = await this.usersRespository.create({
            data: {
                telegramId: data.telegramId,
                displayName: data.displayName,
                email: data.email,
                role: data.role,
            },
        });

        switch (data.role) {
            case 'DEVELOPER':
                if (developerProfileData) {
                    await this.developerProfileRespository.create({
                        userId: user.id,
                        ...developerProfileData,
                    });
                }
                break;
            case 'EMPLOYER':
                if (employerProfileData) {
                    await this.employerProfileRespository.create({
                        userId: user.id,
                        ...employerProfileData,
                    } as any);
                }
                break;
            default:
                throw new Error('Invalid role');
        }

		return user;
	}

	async getUserByTelegramId(telegramId: bigint | number) {
		return await this.usersRespository.getByTelegramId(telegramId);
	}

    async getUserById(userId:number) {
        return await this.usersRespository.getById(userId);
    }

	async updateUser(id: number, data: UserUpdateInput) {
		return await this.usersRespository.update(id, data);
	}
}