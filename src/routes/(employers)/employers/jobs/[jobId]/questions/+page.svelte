<script lang="ts">
	import { ApplicationFormBuilder } from '$lib/components'
	import type { PageData } from './$types'

	export let data: PageData
</script>

<section class="card !bg-accent-500/5 max-w-3xl flex flex-col mx-auto">
	<div class="card-header">
		<h3>
			{data.job.customQuestions.length > 0
				? 'Edit Custom Questions'
				: 'Add Custom Questions (optional)'}
		</h3>
	</div>
	{#if data.job.customQuestions.length > 0}
		<ApplicationFormBuilder questions={data.job.customQuestions} />
	{:else}
		<ApplicationFormBuilder />
	{/if}
</section>
