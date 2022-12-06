import { error, redirect } from '@sveltejs/kit'
import type { RequestHandler } from './$types'

export const POST: RequestHandler = async ({ locals }) => {
	const { error: err } = await locals.sb.auth.signOut()
	locals.session = null
	if (err) {
		throw error(500, err.message)
	}
	throw redirect(303, '/login')
}
