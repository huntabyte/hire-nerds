import { prisma } from '$lib/server/prisma';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ locals, params }) => {
	if (!locals.session?.user) {
		throw redirect(303, '/login');
	}

	// TODO: Test security of this route with unauth/non-org user

	const getResume = async (resumeId: string) => {
		const resume = await prisma.resume.findUnique({
			where: {
				id: resumeId,
			},
			include: {
				skills: true,
				experience: true,
				education: true,
			},
		});

		return resume;
	};

	return {
		resume: getResume(params.resumeId),
	};
};
