import { postJobSchema } from '$lib/schemas'
import { prisma } from '$lib/server/prisma'
import { validateData } from '$lib/utils'
import { error, fail } from '@sveltejs/kit'
import type { Actions } from './$types'

export const actions: Actions = {
	postJob: async ({ request, locals }) => {
		const body = await request.formData()
		const { formData, errors } = await validateData(body, postJobSchema, true)

		if (errors) {
			return fail(400, {
				data: body,
				errors: errors.fieldErrors,
			})
		}

		const userOrg = await prisma.organizationUser.findUnique({
			where: {
				userId: locals.session?.user.id,
			},
		})
		if (!userOrg) {
			throw error(401, 'Unauthorized')
		}

		if (locals.session?.user) {
			try {
				await prisma.job.create({
					data: {
						organizationId: userOrg.organizationId,
						userId: locals.session.user.id,
						...formData,
					},
				})
				return {
					success: true,
				}
			} catch (err) {
				console.log('Error: ', err)
				throw error(500, 'Something went wrong creating the job.')
			}
		}
	},
	publishJob: async ({ params }) => {
		try {
			await prisma.job.update({
				where: {
					id: params.jobId,
				},
				data: {
					status: 'OPEN',
				},
			})
			return {
				success: true,
			}
		} catch (err) {
			console.log('Error: ', err)
			throw error(500, 'Something went wrong publishing the job.')
		}
	},
}
