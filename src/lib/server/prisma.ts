import { PrismaClient } from '@prisma/client';
import { CONNECTION_POOL_URL } from '$env/static/private';

let prisma: PrismaClient;
// export const prisma = new PrismaClient({
// 	datasources: {
// 		db: {
// 			url: CONNECTION_POOL_URL,
// 		},
// 	},
// });

declare global {
	var __db__: PrismaClient;
}

if (process.env.NODE_ENV === 'production') {
	prisma = new PrismaClient({
		datasources: {
			db: {
				url: CONNECTION_POOL_URL,
			},
		},
	});
} else {
	if (!global.__db__) {
		global.__db__ = new PrismaClient({
			datasources: {
				db: {
					url: CONNECTION_POOL_URL,
				},
			},
		});
	}
	prisma = global.__db__;
	prisma.$connect();
}

export { prisma };
