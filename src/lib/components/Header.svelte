<script lang="ts">
	import { Input } from '$lib/components'
	import { FileButton } from '@skeletonlabs/skeleton'

	let something: FileList
</script>

<div class="flex flex-col gap-2 items-center">
	<h1>Find a job, nerd.</h1>
	<Input type="text" label="Search for jobs" id="search" />
	<FileButton files={something} accept="image/*" />
</div>
