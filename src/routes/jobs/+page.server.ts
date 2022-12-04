import { prisma } from '$lib/server/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const getJobs = async () => {
		const jobs = await prisma.job.findMany();
		return jobs;
	};

	return {
		jobs: getJobs(),
	};
};
