import { prisma } from '$lib/server/prisma';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals }) => {
	const orgUser = await prisma.organizationUser.findUnique({
		where: {
			userId: locals.session?.user.id,
		},
	});

	if (orgUser) {
		const organization = await prisma.organization.findUnique({
			where: {
				id: orgUser.organizationId,
			},
		});

		return {
			organization,
		};
	}

	return {
		organization: undefined,
	};
};
