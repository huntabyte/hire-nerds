import { redirect } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ parent }) => {
	const { job } = await parent()

	if (job.status !== 'DRAFT') {
		throw redirect(303, `/employers/jobs/${job.id}`)
	}
}
