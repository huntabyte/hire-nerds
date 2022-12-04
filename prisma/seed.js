import * as dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';

dotenv.config();

const prisma = new PrismaClient({
	datasources: {
		db: {
			url: process.env.CONNECTION_POOL_URL,
		},
	},
});

async function main() {
	const supabase = createClient(
		process.env.PUBLIC_SUPABASE_URL,
		process.env.PUBLIC_SUPABASE_ANON_KEY,
	);

	const users = [];
	for (let i = 0; i < 20; i++) {
		users.push({
			email: faker.internet.exampleEmail(
				faker.name.firstName(),
				faker.name.lastName(),
			),
			password: 'password123',
		});
	}

	for (let i = 0; i < users.length; i++) {
		const { data: session, error } = await supabase.auth.signUp({
			email: users[i].email,
			password: 'password123!!!',
		});
		if (session.user) {
			const profile = await prisma.profile.create({
				data: {
					id: session.user.id,
				},
			});

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
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
