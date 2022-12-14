import { prisma } from '$lib/server/prisma'
import { error, redirect } from '@sveltejs/kit'
import type { Actions } from './$types'

export const actions: Actions = {
	createApplication: async ({ params, request, locals }) => {
		if (!locals.session?.user) {
			throw redirect(303, '/login')
		}

		const resume = await prisma.resume.findFirst({
			where: {
				userId: locals.session.user.id,
			},
		})

		if (!resume) {
			throw redirect(303, '/my/resume/create')
		}

		const { jobId } = params

		const job = await prisma.job.findUnique({
			where: {
				id: jobId,
			},
		})

		if (!job) {
			throw error(404, 'Job not found')
		}

		try {
			await prisma.jobApplication.create({
				data: {
					userId: locals.session.user.id,
					jobId: params.jobId,
					resumeId: resume.id,
				},
			})
		} catch (err) {
			console.log('Error: ', err)
			throw error(500, 'Something went wrong')
		}

		return {
			success: true,
		}
	},
}
