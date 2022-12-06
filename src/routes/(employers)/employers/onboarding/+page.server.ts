import { validateData } from '$lib/utils'
import type { Actions, PageServerLoad } from './$types'
import { createOrganizationSchema } from '$lib/schemas'
import { error, invalid, redirect } from '@sveltejs/kit'
import { prisma } from '$lib/server/prisma'

export const load: PageServerLoad = async ({ locals }) => {
	if (!locals.session?.user.id) {
		throw redirect(303, '/login')
	}

	const orgUser = await prisma.organizationUser.findUnique({
		where: {
			userId: locals.session?.user.id,
		},
	})

	if (orgUser) {
		throw redirect(303, '/employers')
	}
}

export const actions: Actions = {
	createOrganization: async ({ request, locals }) => {
		if (!locals.session?.user.id) {
			throw error(401, 'Unauthorized')
		}
		const { formData, errors } = await validateData(
			await request.formData(),
			createOrganizationSchema,
		)

		if (errors) {
			return invalid(400, {
				data: formData,
				errors,
			})
		}

		try {
			const organization = await prisma.organization.create({
				data: formData,
			})

			await prisma.organizationUser.create({
				data: {
					organizationId: organization.id,
					userId: locals.session?.user.id,
					role: 'ADMIN',
				},
			})
		} catch (err) {
			console.log('Error: ', err)

			throw error(500, 'Something went wrong')
		}
	},
}
