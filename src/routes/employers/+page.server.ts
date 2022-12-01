import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ parent }) => {
	const { organization } = await parent();

	if (!organization) {
		throw redirect(303, '/employers/onboarding');
	}
};
