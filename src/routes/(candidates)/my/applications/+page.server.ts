import { prisma } from '$lib/server/prisma';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ locals }) => {
	if (!locals.session?.user) {
		throw redirect(303, '/login');
	}

	const getUserJobApplications = async (userId: string) => {
		const applications = await prisma.jobApplication.findMany({
			where: {
				userId: userId,
			},
			select: {
				createdAt: true,
				job: {
					select: {
						id: true,
						status: true,
						title: true,
						location: true,
						organization: {
							select: {
								name: true,
							},
						},
					},
				},
			},
		});

		return applications;
	};

	return {
		applications: getUserJobApplications(locals.session.user.id),
	};
};
