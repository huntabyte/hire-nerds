<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ jobs } = data);
</script>

<div class="flex flex-col items-center w-full">
	<h1 class="text-white text-3xl font-semibold ">Jobs</h1>
	<div class="divider w-1/2 self-center" />
	<ul>
		{#each jobs as job}
			<li>
				{job.title}
			</li>
		{/each}
	</ul>
</div>
