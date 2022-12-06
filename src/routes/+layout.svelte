<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css'
	import '@skeletonlabs/skeleton/styles/all.css'
	import '../app.postcss'
	import { Toaster } from 'svelte-french-toast'
	import { invalidateAll } from '$app/navigation'
	import { supabase } from '$lib/supabase'
	import { onMount } from 'svelte'

	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange(() => {
			invalidateAll()
		})

		return () => {
			subscription.unsubscribe()
		}
	})
</script>

<Toaster />
<slot />
