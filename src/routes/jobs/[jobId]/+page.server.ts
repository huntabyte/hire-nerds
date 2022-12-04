import { prisma } from '$lib/server/prisma';
import { error, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = ({ params, locals }) => {
	const getJob = async (jobId: string) => {
		const job = await prisma.job.findUnique({
			where: {
				id: jobId,
			},
		});
		return job;
	};

	const getJobApplications = async (jobId: string) => {
		const applications = await prisma.jobApplication.findMany({
			where: {
				jobId: params.jobId,
			},
		});
		return applications;
	};

	const getApplicationStatus = async (userId: string, jobId: string) => {
		const hasApplied = await prisma.jobApplication.findFirst({
			where: {
				jobId: jobId,
				userId: userId,
			},
		});

		if (hasApplied) {
			return true;
		} else {
			return false;
		}
	};

	if (!locals.session?.user) {
		return {
			job: getJob(params.jobId),
			applications: getJobApplications(params.jobId),
			hasApplied: false,
		};
	}

	return {
		job: getJob(params.jobId),
		applications: getJobApplications(params.jobId),
		hasApplied: getApplicationStatus(locals.session.user.id, params.jobId),
	};
};

export const actions: Actions = {
	apply: async ({ locals, params }) => {
		if (!locals.session?.user) {
			throw redirect(303, '/login');
		}

		const resume = await prisma.resume.findFirst({
			where: {
				userId: locals.session.user.id,
			},
		});

		if (!resume) {
			throw redirect(303, '/resume/create');
		}

		try {
			await prisma.jobApplication.create({
				data: {
					userId: locals.session.user.id,
					jobId: params.jobId,
				},
			});
		} catch (err) {
			console.log('Error: ', err);
			throw error(500, 'Something went wrong');
		}

		return {
			success: true,
		};
	},
};
