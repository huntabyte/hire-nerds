import { prisma } from '$lib/server/prisma'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ params, parent }) => {
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

		return applications
	}

	return {
		applications: getJobApplications(params.jobId),
	}
}
