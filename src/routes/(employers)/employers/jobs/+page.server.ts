import { prisma } from '$lib/server/prisma';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals, parent }) => {
	const { organization } = await parent();
	if (!organization) {
		throw error(401, 'Unauthorized');
	}

	const getOrganizationJobs = async (organizationId: string) => {
		const jobs = await prisma.job.findMany({
			where: {
				organizationId: organizationId,
			},
		});
		return jobs;
	};
	return {
		jobs: getOrganizationJobs(organization.id),
	};
};
