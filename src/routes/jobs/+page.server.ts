import { prisma } from '$lib/server/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const getJobs = async () => {
		return await prisma.job.findMany();
	};

	return {
		jobs: getJobs(),
	};
};
