import { createSkillSchema } from '$lib/schemas';
import { prisma } from '$lib/server/prisma';
import { validateData } from '$lib/utils';
import { error, invalid, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	createSkill: async ({ request, locals }) => {
		if (!locals.session?.user) {
			throw error(401, 'Unauthorized');
		}

		const { formData, errors } = await validateData(
			await request.formData(),
			createSkillSchema,
		);

		if (errors) {
			return invalid(400, {
				data: formData,
				errors: errors.fieldErrors,
			});
		}

		const resume = await prisma.resume.findUnique({
			where: {
				userId: locals.session.user.id,
			},
		});

		if (!resume) {
			throw redirect(303, '/my/resume/create');
		}

		try {
			await prisma.resumeSkills.create({
				data: {
					...formData,
					resumeId: resume.id,
				},
			});
		} catch (err) {
			console.log('Error: ', err);

			throw error(500, 'Something went wrong adding experience.');
		}
		throw redirect(303, '/my/resume');
	},
};
