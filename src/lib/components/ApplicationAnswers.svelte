<script lang="ts">
	import { questionType } from '$lib/constants'
	import type { IJob, Question } from '$lib/types'
	import { serializeJson } from '$lib/utils'
	import type { JobApplication } from '@prisma/client'
	import { Divider } from '@skeletonlabs/skeleton'

	export let job: IJob
	export let application: JobApplication

	type Answer = {
		[k: string]: string
	}

	const jobCustomQs = serializeJson<Question[]>(JSON.stringify(job.customQuestions))
	const answers = serializeJson<Answer>(JSON.stringify(application.questionAnswers[0]))
</script>

<div class="card p-4">
	<div class="card-heading px-4">
		<h2><span class="font-medium"> Application Answers </span></h2>
		<Divider
			borderStyle="solid"
			borderWidth="border-t"
			margin="mt-2"
			borderColor="border-surace-50"
		/>
	</div>
	<div class="p-4 flex flex-col gap-6">
		{#each jobCustomQs as customQuestion}
			{#if customQuestion}
				{#if customQuestion.type === questionType.MULTIPLE_CHOICE}
					<div class="flex flex-col gap-2">
						<label for={customQuestion.id}>{customQuestion.question.title}</label>
						{#each customQuestion.question.options as option}
							<label class="flex items-center space-x-2">
								<input
									type="radio"
									name={customQuestion.id}
									value={option.value}
									bind:group={answers[customQuestion.id]}
									disabled
								/>
								<p class="leading-none">{option.value}</p>
							</label>
						{/each}
					</div>
				{:else}
					<div class="flex flex-col gap-2">
						<label for="">{customQuestion.question.title}</label>
						<input
							type="text"
							name={customQuestion.id}
							value={answers[customQuestion.id]}
							disabled
						/>
					</div>
				{/if}
			{/if}
		{/each}
	</div>
</div>
