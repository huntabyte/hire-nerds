<script lang="ts">
	import { Toaster } from 'svelte-french-toast';
	import { invalidateAll } from '$app/navigation';
	import { Navbar } from '$lib/components';
	import { supabase } from '$lib/supabase';
	import { onMount } from 'svelte';
	import '../app.postcss';

	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange(() => {
			invalidateAll();
		});

		return () => {
			subscription.unsubscribe();
		};
	});
</script>

<Toaster />
<Navbar />
<div class="p-4 w-full">
	<slot />
</div>
