import * as dotenv from 'dotenv'
import { createClient } from '@supabase/supabase-js'
import { faker } from '@faker-js/faker'
import { PrismaClient } from '@prisma/client'
dotenv.config()
const prisma = new PrismaClient({
	datasources: {
		db: {
			url: process.env.CONNECTION_POOL_URL,
		},
	},
})

const createUser = async (userId) => {
	const firstName = faker.name.firstName()
	const lastName = faker.name.lastName()

	const profile = await prisma.profile.create({
		data: {
			id: userId,
			firstName,
			lastName,
		},
	})

	return profile
}

const createOrganization = async (profile) => {
	const organization = await prisma.organization.create({
		data: {
			name: faker.company.name(),
			website: faker.internet.url(),
		},
	})
	if (organization) {
		await prisma.organizationUser.create({
			data: {
				organizationId: organization.id,
				userId: profile.id,
				role: 'ADMIN',
			},
		})
	}
	return organization
}

const createManyJobs = async (profile, organization, numJobs) => {
	const data = []

	for (let i = 0; i < numJobs; i++) {
		const compType = faker.helpers.arrayElement(['SALARY', 'HOURLY'])
		let payScaleBegin
		let payScaleEnd

		if (compType === 'SALARY') {
			payScaleBegin = faker.datatype.number({ min: 20000, max: 1000000 })
			payScaleEnd = faker.datatype.number({ min: payScaleBegin, max: 3000000 })
		}
		if (compType === 'HOURLY') {
			payScaleBegin = faker.datatype.number({ min: 10, max: 300 })
			payScaleEnd = faker.datatype.number({ min: payScaleBegin, max: 1000 })
		}

		data.push({
			title: faker.name.jobTitle(),
			location: faker.address.city(),
			jobType: faker.helpers.arrayElement([
				'FULL_TIME',
				'PART_TIME',
				'CONTRACT',
			]),
			compType,
			payScaleBegin,
			payScaleEnd,
			description: faker.company.catchPhrase(),
			jobLocType: faker.helpers.arrayElement(['REMOTE', 'HYBRID', 'OFFICE']),
			organizationId: organization.id,
			userId: profile.id,
			status: 'OPEN',
		})
	}
	const jobs = await prisma.job.createMany({
		data: data,
	})
	return jobs
}

const createResume = async (profile) => {
	const resume = await prisma.resume.create({
		data: {
			firstName: profile.firstName,
			lastName: profile.lastName,
			summary: faker.lorem.paragraph(),
			location: faker.address.cityName(),
			userId: profile.id,
		},
	})
	const city = faker.address.cityName()
	// create resume education
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
	})

	// create resume experience
	await prisma.resumeExperience.create({
		data: {
			jobTitle: faker.name.jobTitle(),
			company: faker.company.name(),
			location: `${faker.address.cityName()} - ${faker.address.state()}`,
			startDate: faker.date.past(),
			endDate: faker.date.past(),
			currentlyEmployed: faker.datatype.boolean(),
			resumeId: resume.id,
		},
	})
	// create resume skills

	await prisma.resumeSkills.create({
		data: {
			name: faker.company.bsNoun(),
			resumeId: resume.id,
		},
	})

	return resume
}

const createJobApplication = async (profile, resume, job) => {
	const application = await prisma.jobApplication.create({
		data: {
			userId: profile.id,
			jobId: job.id,
			resumeId: resume.id,
		},
	})
	return application
}

export const orgUserIds = [
	'2cfe9094-26e0-487b-b7b0-cc8f354d4d2b',
	'3564b2e7-69d3-4eab-ac03-9b17af1acd76',
	'4385b459-a83a-4ce3-a830-e55ef58efa00',
]

export const candidateUserIds = [
	'8dac227c-348a-43f2-9227-4fa45945797c',
	'e3e5fab5-eac4-4bec-8107-28aed0ffa491',
	'805938da-da53-400e-9aaf-03f4fb15aec4',
]

async function main() {
	for (let val of orgUserIds) {
		const profile = await createUser(val)
		const organization = await createOrganization(profile)

		await createManyJobs(profile, organization, 5)
	}

	const jobs = await prisma.job.findMany()

	for (let val of candidateUserIds) {
		faker.seed(Math.random() * 100)
		const profile = await createUser(val)
		const resume = await createResume(profile)
		let jobsToApply = []

		for (let i = 0; i < 5; i++) {
			let num = faker.datatype.number({ min: 0, max: 14 })

			while (jobsToApply.includes(num)) {
				num = faker.datatype.number({ min: 0, max: 14 })
			}
			jobsToApply.push(num)
		}

		for (const jobIdx of jobsToApply) {
			await createJobApplication(profile, resume, jobs[jobIdx])
		}
		jobsToApply = []
	}
}

main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async (e) => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})
