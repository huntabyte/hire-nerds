<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms'
	import toast from 'svelte-french-toast'
	import type { PageData } from './$types'

	export let data: PageData

	$: ({ job, session, applicationCount, hasApplied } = data)

	const submitApplication: SubmitFunction = () => {
		return async ({ result, update }) => {
			switch (result.type) {
				case 'success':
					toast.success('Successfully applied!')
					await update()
					break
				case 'error':
					toast.error('Something went wrong. Please try again later')
					break
				default:
					break
			}
		}
	}
</script>

{#if job}
	<div class="w-full max-w-2xl">
		<div class="flex w-full justify-between">
			<h1 class="text-2xl font-bold text-white">{job.title}</h1>

			{#if session}
				{#if !hasApplied}
					{#if job.customQuestions.length > 0}
						<a href="/jobs/{job.id}/apply" class="btn btn-filled-primary">Apply</a>
					{:else}
						<form action="?/createApplication" method="POST" use:enhance={submitApplication}>
							<button type="submit" class="btn btn-filled-accent">Apply</button>
						</form>
					{/if}
				{:else}
					<button disabled class="btn btn-ghost-surface">Applied✅</button>
				{/if}
			{/if}
		</div>
		<p>{job.location}</p>
		<p>{job.jobLocType}</p>
		<p>{job.jobType}</p>
		<p>{job.compType}</p>
		<p>${job.payScaleBegin} - ${job.payScaleEnd}</p>
		<p>{job.description}</p>
		<p>Applications Submitted: {applicationCount}</p>
	</div>
{/if}
