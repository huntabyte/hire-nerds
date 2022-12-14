<script lang="ts">
	import { questionType } from '$lib/constants'
	import type { Question } from '$lib/types'
	import { serializeJson } from '$lib/utils'
	import type { ActionData, PageData } from './$types'

	export let data: PageData
	export let form: ActionData

	const jobCustomQs = serializeJson<Question[]>(JSON.stringify(data.job.customQuestions))
	console.log(jobCustomQs)

	$: ({ job } = data)
</script>

<div class="flex flex-col mx-auto max-w-2xl">
	<div class="card">
		<div class="card-header">
			<h2 class="card-title">Apply for {job.title}</h2>
		</div>
		<form action="?/createApplication" method="POST" class="p-4 flex flex-col gap-6">
			{#each jobCustomQs as customQuestion}
				{#if customQuestion}
					{#if customQuestion.type === questionType.MULTIPLE_CHOICE}
						<div class="flex flex-col gap-2">
							<label for={customQuestion.id}>{customQuestion.question.title}</label>
							{#each customQuestion.question.options as option}
								<label class="flex items-center space-x-2">
									<input type="radio" name={customQuestion.id} value={option.value} />
									<p class="leading-none">{option.value}</p>
								</label>
							{/each}
							{#if form?.errors}
								{#if Object.hasOwn(form?.errors, customQuestion.id)}
									<span class="text-warning-300">An answer is required</span>
								{/if}
							{/if}
						</div>
					{:else}
						<div class="flex flex-col gap-2">
							<label for="">{customQuestion.question.title}</label>
							<input
								type="text"
								name={customQuestion.id}
								value={form?.answers?.[customQuestion.id] ?? ''}
							/>
							{#if form?.errors?.[customQuestion.id]}
								<span class="text-warning-300">An answer is required</span>
							{/if}
						</div>
					{/if}
				{/if}
			{/each}
			<button type="submit" class="btn btn-filled-primary">Submit</button>
		</form>
	</div>
</div>
