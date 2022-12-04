<script lang="ts">
	import type { PageData } from './$types';
	import { Job } from '$lib/components';

	export let data: PageData;

	$: ({ jobs } = data);
</script>

<h1>Jobs</h1>
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 sm:gap-2 md:gap-4 md:gap-y-4 gap-y-2">
	{#each jobs as job}
		<Job {job} />
	{/each}
</div>
