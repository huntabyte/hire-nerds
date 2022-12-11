import { prisma } from '$lib/server/prisma'
import type { LayoutServerLoad } from './$types'
import { error } from '@sveltejs/kit'

export const load: LayoutServerLoad = async ({ locals, params }) => {
	const getJob = async (jobId: string) => {
		const job = await prisma.job.findUnique({
			where: {
				id: jobId,
			},
		})

		if (!job) {
			throw error(404, 'Job not found')
		}
		return job
	}

	const getApplicationCount = async (jobId: string) => {
		const count = await prisma.jobApplication.count({
			where: {
				jobId: jobId,
			},
		})
		return count
	}

	const getApplicationStatus = async (userId: string, jobId: string) => {
		const hasApplied = await prisma.jobApplication.findFirst({
			where: {
				jobId: jobId,
				userId: userId,
			},
		})

		if (hasApplied) {
			return true
		} else {
			return false
		}
	}

	if (!locals.session?.user) {
		return {
			job: getJob(params.jobId),
			applicationCount: getApplicationCount(params.jobId),
			hasApplied: false,
		}
	}

	return {
		job: getJob(params.jobId),
		applicationCount: getApplicationCount(params.jobId),
		hasApplied: getApplicationStatus(locals.session.user.id, params.jobId),
	}
}
