<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ jobs } = data);
</script>

<h1>Jobs</h1>
<ul>
	{#each jobs as job}
		<li>
			<a href="/jobs/{job.id}" class="text-white font-medium">{job.title}</a>
		</li>
	{/each}
</ul>
