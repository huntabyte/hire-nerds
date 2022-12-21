import { redirect } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async () => {
	throw redirect(303, '/jobs')
}
