<script lang="ts">
	import '../styles/theme-hbyte-bg.css'
	import '@skeletonlabs/skeleton/styles/all.css'
	import '../app.postcss'
	import { Toaster } from 'svelte-french-toast'
	import { invalidateAll } from '$app/navigation'
	import { supabase } from '$lib/supabase'
	import { onMount } from 'svelte'
	import { Modal } from '@skeletonlabs/skeleton'

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

<Modal />

<Toaster />
<slot />
