<script lang="ts">
	import { JobPostingDataTable } from '$lib/components'
	import type { PageData } from './$types'

	export let data: PageData

	$: ({ jobs } = data)
</script>

<div class="p-4">
	<a href="/employers/jobs/post" class="btn btn-filled-primary">New</a>
	<JobPostingDataTable sourceData={jobs} />
</div>
