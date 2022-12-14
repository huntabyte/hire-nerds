import {
	createEducationSchema,
	createExperienceSchema,
	createSkillSchema,
	updateResumeDetailsSchema,
} from '$lib/schemas'
import { prisma } from '$lib/server/prisma'
import { validateData } from '$lib/utils'
import { error, fail, redirect } from '@sveltejs/kit'
import type { Actions, PageServerLoad } from './$types'

export const load: PageServerLoad = ({ locals }) => {
	if (!locals.session?.user) {
		throw redirect(303, '/login')
	}

	const getResume = async (userId: string) => {
		const resume = await prisma.resume.findUnique({
			where: {
				userId: userId,
			},
			include: {
				education: true,
				skills: true,
				experience: true,
			},
		})

		if (resume) {
			return resume
		}
		throw redirect(303, '/my/resume/create')
	}

	return {
		resume: getResume(locals.session.user.id),
	}
}

export const actions: Actions = {
	createExperience: async ({ request, locals }) => {
		if (!locals.session?.user) {
			throw error(401, 'Unauthorized')
		}

		const { formData, errors } = await validateData(
			await request.formData(),
			createExperienceSchema,
		)

		if (errors) {
			return fail(400, {
				data: formData,
				errors: errors.fieldErrors,
			})
		}

		const resume = await prisma.resume.findUnique({
			where: {
				userId: locals.session.user.id,
			},
		})

		if (!resume) {
			throw redirect(303, '/my/resume/create')
		}

		try {
			await prisma.resumeExperience.create({
				data: {
					...formData,
					resumeId: resume.id,
				},
			})
		} catch (err) {
			console.log('Error: ', err)

			throw error(500, 'Something went wrong adding experience.')
		}

		return {
			success: true,
		}
	},
	createEducation: async ({ request, locals }) => {
		if (!locals.session?.user) {
			throw error(401, 'Unauthorized')
		}

		const { formData, errors } = await validateData(
			await request.formData(),
			createEducationSchema,
		)

		if (errors) {
			return fail(400, {
				data: formData,
				errors: errors.fieldErrors,
			})
		}

		const resume = await prisma.resume.findUnique({
			where: {
				userId: locals.session.user.id,
			},
		})

		if (!resume) {
			throw redirect(303, '/my/resume/create')
		}

		try {
			await prisma.resumeEducation.create({
				data: {
					...formData,
					resumeId: resume.id,
				},
			})
		} catch (err) {
			console.log('Error: ', err)

			throw error(500, 'Something went wrong adding education.')
		}
		return {
			success: true,
		}
	},

	updateResumeDetails: async ({ request, locals }) => {
		if (!locals.session?.user) {
			throw error(401, 'Unauthorized')
		}

		const { formData, errors } = await validateData(
			await request.formData(),
			updateResumeDetailsSchema,
		)

		if (errors) {
			return fail(400, {
				data: formData,
				errors: errors.fieldErrors,
			})
		}

		const resume = await prisma.resume.findUnique({
			where: {
				userId: locals.session.user.id,
			},
		})

		if (!resume) {
			throw redirect(303, '/my/resume/create')
		}

		try {
			await prisma.resume.update({
				where: {
					id: resume.id,
				},
				data: {
					...formData,
				},
			})
		} catch (err) {
			console.log('Error: ', err)

			throw error(500, 'Something went wrong adding education.')
		}
		return {
			success: true,
		}
	},
	createSkill: async ({ request, locals }) => {
		if (!locals.session?.user) {
			throw error(401, 'Unauthorized')
		}

		const { formData, errors } = await validateData(
			await request.formData(),
			createSkillSchema,
		)

		if (errors) {
			return fail(400, {
				data: formData,
				errors: errors.fieldErrors,
			})
		}

		const resume = await prisma.resume.findUnique({
			where: {
				userId: locals.session.user.id,
			},
		})

		if (!resume) {
			throw redirect(303, '/my/resume/create')
		}

		try {
			await prisma.resumeSkills.create({
				data: {
					...formData,
					resumeId: resume.id,
				},
			})
		} catch (err) {
			console.log('Error: ', err)

			throw error(500, 'Something went wrong adding education.')
		}
		return {
			success: true,
		}
	},
}
