import type { Actions, PageServerLoad } from './$types'
import { validateData } from '$lib/utils'
import { createResumeSchema } from '$lib/schemas'
import { error, invalid, redirect } from '@sveltejs/kit'
import { prisma } from '$lib/server/prisma'

export const load: PageServerLoad = async ({ locals }) => {
	if (!locals.session?.user) {
		throw redirect(303, '/login')
	}

	const resume = await prisma.resume.findUnique({
		where: {
			userId: locals.session.user.id,
		},
	})
	if (resume) {
		throw redirect(303, '/my/resume')
	}
}

export const actions: Actions = {
	createResume: async ({ request, locals }) => {
		if (!locals.session?.user) {
			throw error(401, 'Unauthorized')
		}

		const { formData, errors } = await validateData(
			await request.formData(),
			createResumeSchema,
		)

		if (errors) {
			return invalid(400, {
				data: formData,
				errors: errors.fieldErrors,
			})
		}

		try {
			await prisma.resume.create({
				data: {
					userId: locals.session.user.id,
					...formData,
				},
			})
		} catch (err) {
			console.log('Error: ', err)
			throw error(500, 'Something went wrong creating a resume.')
		}
		throw redirect(303, '/my/resume')
	},
}
