import { prisma } from '$lib/server/prisma';
import { error, redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals, parent }) => {
	const { organization } = await parent();

	if (!locals.session?.user) {
		throw error(303, '/login');
	}

	if (!organization) {
		throw redirect(303, '/employers/onboarding');
	}
};
