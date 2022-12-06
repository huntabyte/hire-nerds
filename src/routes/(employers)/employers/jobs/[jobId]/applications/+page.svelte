<script lang="ts">
	import type { PageData } from './$types'
	import { CandidatesDataTable } from '$lib/components'

	export let data: PageData

	$: ({ applications } = data)
</script>

<div class="p-4">
	<CandidatesDataTable sourceData={applications} />
</div>
