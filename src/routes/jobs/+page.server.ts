import { prisma } from '$lib/server/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const getJobs = async () => {
		return await prisma.job.findMany();
	};

	return {
		jobs: getJobs(),
	};
};
