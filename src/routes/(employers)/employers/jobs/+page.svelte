<script lang="ts">
	import { JobPostingDataTable } from '$lib/components'
	import type { PageData } from './$types'

	export let data: PageData

	$: ({ jobs } = data)
</script>

<div>
	<div class="flex justify-between items-center py-4">
		<h2>Job Postings</h2>
		<a href="/employers/jobs/post" class="btn btn-filled-primary">New</a>
	</div>
	<JobPostingDataTable sourceData={jobs} />
</div>
