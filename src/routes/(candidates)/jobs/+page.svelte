<script lang="ts">
	import type { PageData } from './$types'
	import { Job } from '$lib/components'

	export let data: PageData

	$: ({ jobs } = data)
</script>

<div class="p-8 flex flex-col gap-4">
	<h2>Jobs</h2>

	{#each jobs as job}
		<Job {job} />
	{/each}
</div>
