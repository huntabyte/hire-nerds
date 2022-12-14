<script lang="ts">
	import type { PageData } from './$types'
	import { Resume, ApplicationAnswers } from '$lib/components'

	export let data: PageData
</script>

<div class="flex gap-6">
	<Resume resume={data.application.resume} />
	{#if data.application.questionAnswers.length > 0}
		<ApplicationAnswers job={data.job} application={data.application} />
	{/if}
</div>
