import { validateData } from '$lib/utils'
import { json } from '@sveltejs/kit'
import type { RequestHandler } from './$types'
import { createApplicationQuestionsSchema } from '$lib/schemas'
import { prisma } from '$lib/server/prisma'

export const POST: RequestHandler = async ({ params, request }) => {
	const body = await request.json()

	const { formData: data, errors } = await validateData(
		body,
		createApplicationQuestionsSchema,
		true,
	)

	if (errors) {
		return json({ errors }, { status: 400 })
	}

	try {
		await prisma.job.update({
			where: {
				id: params.jobId,
			},
			data: {
				customQuestions: data,
			},
		})
	} catch (err) {
		console.log(err)
	}

	return json(body)
}
