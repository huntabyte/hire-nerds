<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ organization } = data);
</script>

{#if organization}
	<h1 class="text-3xl text-white">{organization.name}</h1>
{/if}
