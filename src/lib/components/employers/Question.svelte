<script lang="ts">
	import { QuestionMultipleChoice, QuestionCustomResponse } from '$lib/components'

	interface IQuestion {
		id: string
		question: any
	}

	let questionType = ''
	export let handleAddQuestion: any
	export let handleDeleteQuestion: any
	export let question: IQuestion
</script>

<div class="w-full">
	{#if !questionType}
		<h5>Select question type</h5>
		<button
			type="button"
			class="btn btn-ghost-primary"
			on:click={() => (questionType = 'multipleChoice')}>Multiple Choice</button
		>
		<button
			type="submit"
			class="btn btn-ghost-primary"
			on:click={() => (questionType = 'customResponse')}>Custom Response</button
		>
	{/if}
	{#if questionType === 'multipleChoice'}
		<button
			type="button"
			class="btn btn-ghost-warning"
			on:click={() => handleDeleteQuestion(question.id)}>Delete Question</button
		>
		<QuestionMultipleChoice />
	{/if}

	<div class="flex w-full gap-2 pt-6">
		<button type="button" class="btn btn-filled-primary w-full" on:click={() => handleAddQuestion()}
			>Add Another Question</button
		>
		<button type="button" class="btn btn-ghost-primary w-full">Finish</button>
	</div>
</div>
