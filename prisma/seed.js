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

const createUser = async (userId) => {
	const firstName = faker.name.firstName();
	const lastName = faker.name.lastName();

	const profile = await prisma.profile.create({
		data: {
			id: userId,
			firstName,
			lastName,
		},
	});

	return profile;
};

const createOrganization = async (profile) => {
	const organization = await prisma.organization.create({
		data: {
			name: faker.company.name(),
			website: faker.internet.url(),
		},
	});
	if (organization) {
		const organizationUser = await prisma.organizationUser.create({
			data: {
				organizationId: organization.id,
				userId: profile.id,
				role: 'ADMIN',
			},
		});
	}
	return organization;
};

const createManyJobs = async (profile, organization, numJobs) => {
	const data = [];

	for (let i = 0; i < numJobs; i++) {
		const compType = faker.helpers.arrayElement(['SALARY', 'HOURLY']);
		let payScaleBegin;
		let payScaleEnd;

		if (compType === 'SALARY') {
			payScaleBegin = faker.datatype.number({ min: 20000, max: 1000000 });
			payScaleEnd = faker.datatype.number({ min: payScaleBegin, max: 3000000 });
		}
		if (compType === 'HOURLY') {
			payScaleBegin = faker.datatype.number({ min: 10, max: 300 });
			payScaleEnd = faker.datatype.number({ min: payScaleBegin, max: 1000 });
		}

		data.push({
			title: faker.name.jobTitle(),
			location: faker.address.city(),
			type: faker.helpers.arrayElement(['FULL_TIME', 'PART_TIME', 'CONTRACT']),
			compType,
			payScaleBegin,
			payScaleEnd,
			description: faker.company.catchPhrase(),
			jobLocType: faker.helpers.arrayElement(['REMOTE', 'HYBRID', 'OFFICE']),
			organizationId: organization.id,
			userId: profile.id,
		});
	}
	const jobs = await prisma.job.createMany({
		data: data,
	});
	return jobs;
};

const createResume = async (profile) => {
	const resume = await prisma.resume.create({
		data: {
			firstName: profile.firstName,
			lastName: profile.lastName,
			location: faker.address.cityName(),
			userId: profile.id,
		},
	});
	const city = faker.address.cityName();

	const resumeEducation = await prisma.resumeEducation.create({
		data: {
			educationLevel: faker.helpers.arrayElement([
				'MASTERS',
				'DOCTORATE',
				'BACHELORS',
				'ASSOCIATE',
			]),
			field: 'Computer Science',
			school: `${city} University`,
			location: city,
			enrolledFrom: faker.date.past(),
			enrolledTo: faker.date.past(),
			currentlyEnrolled: faker.datatype.boolean(),
			resumeId: resume.id,
		},
	});
	const resumeExperience = await prisma.resumeExperience.create({
		data: {
			jobTitle: faker.name.jobTitle(),
			company: faker.company.name(),
			location: `${faker.address.cityName()} - ${faker.address.state()}`,
			employedFrom: faker.date.past(),
			employedTo: faker.date.past(),
			currentlyEmployed: faker.datatype.boolean(),
			resumeId: resume.id,
		},
	});

	const resumeSkills = await prisma.resumeSkills.create({
		data: {
			name: faker.company.bsNoun(),
			resumeId: resume.id,
		},
	});

	return resume;
};

const createJobApplication = async (profile, resume, job) => {
	const application = await prisma.jobApplication.create({
		data: {
			userId: profile.id,
			jobId: job.id,
			resumeId: resume.id,
		},
	});
	return application;
};

export const orgUserIds = [
	'84d396af-e883-450d-a164-7c1399d6ae49',
	'447a2c0c-2231-4f83-aa08-2c427847d04b',
	'06a92e5a-3d85-4098-82fc-97aa931568ce',
	'905ace4b-0cc3-4309-984a-474530707016',
	'9f02566f-3020-492f-9be5-b4a487b61ad4',
];

export const candidateUserIds = [
	'ecae3fd5-550a-47aa-81f8-8edaa779f295',
	'7144973a-2bff-40fe-9f68-fba9cba8ba56',
	'5cd0e9f0-4210-4eba-9cf3-876684304939',
	'3156392a-8220-4e8b-a5cb-5d1332e85805',
	'bb00045f-0358-4ff2-95ad-b0ec5e283365',
	'683cd2ec-d89f-4b8e-93b4-c21d775b332b',
	'11475c79-5726-4fc9-a014-bdbae553468d',
	'0720adf1-2a3f-4f87-9244-53b3c76a3d95',
	'84261d9e-4493-4d22-a4a9-00e30be09bba',
	'c6a190d8-9c65-4940-b77e-3971bd95a4dc',
	'e318b870-3c97-43ba-8ea0-f5329af37269',
	'660d2b95-3790-4e07-b5cc-3dd8b5dcdc66',
	'471742a6-5bf1-43fc-b9e3-2ad73e521919',
	'163f884a-a113-4ec0-96e6-903cdcebdc03',
	'66b571bc-fdb3-45b7-a154-9b37a614ba77',
];

async function main() {
	for (let val of orgUserIds) {
		const profile = await createUser(val);
		const organization = await createOrganization(profile);

		const jobs = await createManyJobs(profile, organization, 5);
	}

	const jobs = await prisma.job.findMany();

	for (let val of candidateUserIds) {
		faker.seed(Math.random() * 100);
		const profile = await createUser(val);
		const resume = await createResume(profile);
		let jobsToApply = [];

		for (let i = 0; i < 5; i++) {
			let num = faker.datatype.number({ min: 0, max: 24 });

			while (jobsToApply.includes(num)) {
				num = faker.datatype.number({ min: 0, max: 24 });
			}
			jobsToApply.push(num);
		}

		for (const jobIdx of jobsToApply) {
			await createJobApplication(profile, resume, jobs[jobIdx]);
		}
		jobsToApply = [];
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
