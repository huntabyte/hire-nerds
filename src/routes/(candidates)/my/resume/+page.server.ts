import { prisma } from '$lib/server/prisma';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ locals }) => {
	if (!locals.session?.user) {
		throw redirect(303, '/login');
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
		});
		return resume;
	};

	return {
		resume: getResume(locals.session.user.id),
	};
};
