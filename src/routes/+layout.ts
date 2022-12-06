import { getSupabase } from '@supabase/auth-helpers-sveltekit'
import type { LayoutLoad } from './$types'

export const load: LayoutLoad = async (event) => {
	const { session } = await getSupabase(event)
	return { session }
}
