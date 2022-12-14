import { loginUserSchema } from '$lib/schemas'
import { validateData } from '$lib/utils'
import { error, fail, redirect } from '@sveltejs/kit'
import type { Actions, PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ locals }) => {
	const { data, error: err } = await locals.sb.auth.getSession()

	if (err) {
		throw error(500, err?.message)
	}

	if (data.session) {
		throw redirect(303, '/')
	}
}

export const actions: Actions = {
	login: async ({ request, locals }) => {
		const { formData, errors } = await validateData(
			await request.formData(),
			loginUserSchema,
		)

		if (errors) {
			return fail(400, {
				data: formData,
				errors: errors.fieldErrors,
			})
		}
		const { data, error: err } = await locals.sb.auth.signInWithPassword({
			email: formData.email,
			password: formData.password,
		})

		if (err) {
			throw error(500, err.message)
		}

		throw redirect(303, '/')
	},
}
