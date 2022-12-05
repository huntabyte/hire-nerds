import { prisma } from '$lib/server/prisma';
import type { IJob } from '$lib/types';
import type { Organization } from '@prisma/client';
import { error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ params, parent }) => {
	const getJob = async (jobId: string) => {
		const job = await prisma.job.findUnique({
			where: {
				id: jobId,
			},
		});

		if (!job) {
			throw error(404, 'Job not found');
		}

		return job as IJob;
	};
	await parent();

	return {
		job: getJob(params.jobId),
	};
};
