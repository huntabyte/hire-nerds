import * as dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';

dotenv.config();
// Create a single supabase client for interacting with your database
const supabase = createClient(
	process.env.PUBLIC_SUPABASE_URL as string,
	process.env.PUBLIC_SUPABASE_ANON_KEY as string,
);

const prisma = new PrismaClient({
	datasources: {
		db: {
			url: process.env.CONNECTION_POOL_URL,
		},
	},
});

type User = {
	email: string;
	password: string;
};

const users: User[] = [];
for (let i = 0; i < 20; i++) {
	users.push({
		email: faker.internet.exampleEmail(),
		password: 'password123',
	});
}

for (let i = 0; i < users.length; i++) {
	const { data: session, error } = await supabase.auth.signUp({
		email: 'example@email.com',
		password: 'example-password',
	});
	if (session.user) {
		const organization = await prisma.organization.create({
			data: {
				name: faker.company.name(),
				website: faker.internet.url(),
			},
		});
		if (organization) {
			const orgUser = await prisma.organizationUser.create({
				data: {
					organizationId: organization.id,
					userId: session.user.id,
				},
			});

			const jobs = await prisma.job.createMany({
				data: [
					{
						title: faker.name.jobTitle(),
						location: faker.address.city(),
						type: faker.helpers.arrayElement([
							'FULL_TIME',
							'PART_TIME',
							'CONTRACT',
						]),
						compType: faker.helpers.arrayElement(['SALARY', 'HOURLY']),
						payScaleBegin: faker.datatype.number({ min: 20000, max: 100000 }),
						payScaleEnd: faker.datatype.number({
							min: 100000,
							max: 50000000,
						}),
						description: faker.company.catchPhrase(),
						jobLocType: faker.helpers.arrayElement([
							'REMOTE',
							'HYBRID',
							'OFFICE',
						]),
						organizationId: organization.id,
						userId: session.user.id,
					},
					{
						title: faker.name.jobTitle(),
						location: faker.address.city(),
						type: faker.helpers.arrayElement([
							'FULL_TIME',
							'PART_TIME',
							'CONTRACT',
						]),
						compType: faker.helpers.arrayElement(['SALARY', 'HOURLY']),
						payScaleBegin: faker.datatype.number({ min: 20000, max: 100000 }),
						payScaleEnd: faker.datatype.number({
							min: 100000,
							max: 50000000,
						}),
						description: faker.company.catchPhrase(),
						jobLocType: faker.helpers.arrayElement([
							'REMOTE',
							'HYBRID',
							'OFFICE',
						]),
						organizationId: organization.id,
						userId: session.user.id,
					},
					{
						title: faker.name.jobTitle(),
						location: faker.address.city(),
						type: faker.helpers.arrayElement([
							'FULL_TIME',
							'PART_TIME',
							'CONTRACT',
						]),
						compType: faker.helpers.arrayElement(['SALARY', 'HOURLY']),
						payScaleBegin: faker.datatype.number({ min: 20000, max: 100000 }),
						payScaleEnd: faker.datatype.number({
							min: 100000,
							max: 50000000,
						}),
						description: faker.company.catchPhrase(),
						jobLocType: faker.helpers.arrayElement([
							'REMOTE',
							'HYBRID',
							'OFFICE',
						]),
						organizationId: organization.id,
						userId: session.user.id,
					},
				],
			});
		}
	}
}
