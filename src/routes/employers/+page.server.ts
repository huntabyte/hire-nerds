import { prisma } from '$lib/server/prisma';
import { NotFoundError } from '@prisma/client/runtime';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	try {
		const orgUser = await prisma.organizationUser.findFirstOrThrow({
			where: {
				userId: locals.session?.user.id,
			},
		});

		const organization = await prisma.organization.findFirst({
			where: {
				id: orgUser.organizationId,
			},
		});

		return {
			organization,
		};
	} catch (err) {
		if (err instanceof NotFoundError) {
			throw redirect(303, '/employers/onboarding');
		}
	}
};
