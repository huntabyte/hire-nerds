import { prisma } from '$lib/server/prisma'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ params, parent }) => {
	await parent()

	const getJobApplications = async (jobId: string) => {
		const applications = await prisma.jobApplication.findMany({
			where: {
				jobId: jobId,
			},
			include: {
				resume: {
					include: {
						skills: true,
						experience: true,
						education: true,
					},
				},
			},
		})

		const applicationsWithResume = applications.map((application) => {
			const resume = application.resume

			return {
				...application,
				firstName: resume.firstName,
				lastName: resume.lastName,
				location: resume.location,
			}
		})

		return applicationsWithResume
	}

	return {
		applications: getJobApplications(params.jobId),
	}
}
