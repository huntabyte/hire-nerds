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

function sleep(ms) {
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
}

const createUser = async () => {
	const supabase = createClient(
		process.env.PUBLIC_SUPABASE_URL,
		process.env.PUBLIC_SUPABASE_ANON_KEY,
	);

	const firstName = faker.name.firstName();
	const lastName = faker.name.lastName();

	const user = {
		firstName,
		lastName,
		email: faker.internet.exampleEmail(firstName, lastName),
		password: 'password123!',
	};

	const { data: session, error } = await supabase.auth.signUp({
		email: user.email,
		password: user.password,
	});
	await sleep(5000);

	console.log(error);
	console.log(session);

	const profile = await prisma.profile.create({
		data: {
			id: session.user.id,
			firstName: user.firstName,
			lastName: user.lastName,
		},
	});
	await supabase.auth.signOut();
	await sleep(5000);

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
};

const createJobApplication = async (profile, job) => {
	const application = await prisma.jobApplication.create({
		data: {
			userId: profile.id,
			jobId: job.id,
		},
	});
	return application;
};

async function main() {
	for (let i = 0; i < 5; i++) {
		const profile = await createUser();
		const organization = await createOrganization(profile);

		const jobs = await createManyJobs(profile, organization, 5);
	}

	const jobs = await prisma.job.findMany();

	for (let i = 0; i < 15; i++) {
		const profile = await createUser();
		const resume = await createResume(profile);
		const jobsToApply = [];
		for (let i = 0; i < 5; i++) {
			let num = faker.datatype.number({ min: 0, max: 24 });

			while (jobsToApply.includes(num)) {
				num = faker.datatype.number({ min: 0, max: 24 });
			}
			jobsToApply.push(num);
		}

		for (const jobIdx in jobsToApply) {
			await createJobApplication(profile, jobs[jobIdx]);
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
