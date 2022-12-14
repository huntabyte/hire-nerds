import { prisma } from '$lib/server/prisma'
import { error, redirect } from '@sveltejs/kit'
import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = async ({ locals }) => {
	if (!locals.session?.user) {
		throw redirect(303, '/login')
	}
}
