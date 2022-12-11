import { prisma } from '$lib/server/prisma'
import { error, redirect } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ locals, params }) => {
	if (!locals.session?.user) {
		throw redirect(303, '/login')
	}

	const getApplication = async (applicationId: string) => {
		const application = await prisma.jobApplication.findUnique({
			where: {
				id: applicationId,
			},
			include: {
				resume: {
					include: {
						experience: true,
						skills: true,
						education: true,
					},
				},
				job: true,
			},
		})

		if (!application) {
			throw error(404, 'Application does not exist')
		}
		return application
	}

	return {
		application: getApplication(params.applicationId),
	}
}
