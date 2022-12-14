import { prisma } from '$lib/server/prisma'
import { error, fail, redirect } from '@sveltejs/kit'
import { questionType } from '$lib/constants'
import type { Actions, PageServerLoad } from './$types'
import type { Question } from '$lib/types'

export const load: PageServerLoad = async ({ locals }) => {
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
}

export const actions: Actions = {
	createApplication: async ({ params, request, locals }) => {
		if (!locals.session?.user) {
			throw redirect(303, '/login')
		}

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
		const data = await prisma.job.findUnique({
			where: {
				id: jobId,
			},
			select: {
				customQuestions: true,
			},
		})
		const customQuestions = data?.customQuestions as Question[]

		type Answer = {
			[k: string]: string
		}

		const answers = Object.fromEntries(await request.formData()) as Answer
		const errors: Answer = {}
		let hasErrors = false

		for (const question of customQuestions) {
			if (!answers[question.id]) {
				errors[question.id] = 'This question is required'
				hasErrors = true
			} else if (question.type === questionType.MULTIPLE_CHOICE) {
				const options = question.question.options.map((option) => {
					return option.value
				})
				if (!options.includes(answers[question.id])) {
					errors[question.id] = 'This question is required'
					hasErrors = true
				}
			}
		}

		if (hasErrors) {
			return fail(400, {
				answers,
				errors,
			})
		}

		try {
			await prisma.jobApplication.create({
				data: {
					userId: locals.session.user.id,
					jobId: params.jobId,
					resumeId: resume.id,
					questionAnswers: answers,
				},
			})
		} catch (err) {
			console.log('Error: ', err)
			throw error(500, 'Something went wrong')
		}

		throw redirect(303, `/jobs/${params.jobId}/`)
	},
}
