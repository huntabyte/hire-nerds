<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ jobs } = data);
</script>

<h1>Jobs</h1>
<ul>
	{#each jobs as job}
		<li>
			<p class="text-white font-medium">{job.title}</p>
		</li>
	{/each}
</ul>
