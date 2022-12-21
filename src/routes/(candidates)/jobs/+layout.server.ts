import { prisma } from '$lib/server/prisma'
import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = async () => {
	const getJobs = async () => {
		return await prisma.job.findMany({
			include: {
				organization: true,
			},
		})
	}
	return {
		jobs: getJobs(),
	}
}
