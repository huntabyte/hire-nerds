<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';
	import toast from 'svelte-french-toast';
	import type { ActionData, PageData } from './$types';

	export let data: PageData;
	export let form: ActionData;

	$: ({ job, session, applications, hasApplied } = data);

	const submitApplication: SubmitFunction = () => {
		return async ({ result, update }) => {
			switch (result.type) {
				case 'success':
					toast.success('Successfully applied!');
					break;
				default:
					break;
			}
			await update();
		};
	};
</script>

{#if job}
	<div class="w-full max-w-2xl">
		<div class="flex w-full justify-between">
			<h1 class="text-2xl font-bold text-white">{job.title}</h1>
			{#if session}
				{#if !hasApplied}
					<form action="?/apply" method="POST" use:enhance={submitApplication}>
						<button type="submit" class="btn btn-primary">Apply</button>
					</form>
				{:else}
					<button disabled class="btn btn-success">Applied✅</button>
				{/if}
			{/if}
		</div>
		<p>{job.location}</p>
		<p>{job.jobLocType}</p>
		<p>{job.type}</p>
		<p>{job.compType}</p>
		<p>${job.payScaleBegin} - ${job.payScaleEnd}</p>
		<p>{job.description}</p>
	</div>
{/if}
