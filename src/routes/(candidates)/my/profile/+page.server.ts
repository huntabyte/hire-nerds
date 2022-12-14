import { updateProfileSchema } from '$lib/schemas'
import { prisma } from '$lib/server/prisma'
import { validateData } from '$lib/utils'
import { error, fail } from '@sveltejs/kit'
import type { Actions, PageServerLoad } from './$types'

export const load: PageServerLoad = ({ locals }) => {
	if (!locals.session?.user.id) {
		throw error(500, 'Something went wrong.')
	}

	const getUserProfile = async (userId: string) => {
		try {
			const profile = await prisma.profile.findUnique({
				where: {
					id: userId,
				},
			})
			return profile
		} catch (err) {
			console.log('Error: ', err)
			throw error(500, 'An unexpected error occured, please try again later.')
		}
	}

	return {
		profile: getUserProfile(locals.session.user.id),
	}
}

export const actions: Actions = {
	updateProfile: async ({ request, locals }) => {
		const { formData, errors } = await validateData(
			await request.formData(),
			updateProfileSchema,
		)

		if (errors) {
			return fail(400, {
				data: formData,
				errors: errors.fieldErrors,
			})
		}

		try {
			await prisma.profile.update({
				where: {
					id: locals.session?.user.id,
				},
				data: formData,
			})
		} catch (err) {
			throw error(500, 'Something went wrong on our end.')
		}
	},
}
