<script lang="ts">
	import type { PageData } from './$types'
	import { ResumeBuilder } from '$lib/components'

	export let data: PageData

	$: ({ resume } = data)
</script>

<div class="w-full h-full p-4">
	<ResumeBuilder {resume} />
</div>
