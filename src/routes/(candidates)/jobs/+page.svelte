<script lang="ts">
	import type { PageData } from './$types'
	import { Job } from '$lib/components'

	export let data: PageData

	$: ({ jobs } = data)
</script>

<div class="p-8 flex flex-col gap-4">
	<h1>Jobs</h1>

	{#each jobs as job}
		<Job {job} />
	{/each}
</div>
