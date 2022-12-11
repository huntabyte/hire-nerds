<script lang="ts">
	import type { MultipleChoice, AnswerOption } from '$lib/types'

	export let question: MultipleChoice

	if (!question?.options) {
		question.options = [
			{
				id: crypto.randomUUID(),
				value: ''
			}
		]
	}

	let numOptions: number
	let tooMany = false

	const handleAddOption = () => {
		if (numOptions >= 8) {
			tooMany = true
			return
		}
		numOptions = numOptions + 1

		question.options = [
			...question.options,
			{
				id: crypto.randomUUID(),
				value: ''
			}
		]
	}

	const handleDeleteOption = (id: string) => {
		question.options = question.options.filter((option) => option.id !== id)
	}

	$: numOptions = question.options.length
</script>

<div class="w-full">
	<label for="">
		<span> Question </span>
	</label>
	<input type="text" bind:value={question.title} />
</div>
<div class="w-full">
	<label for="">
		<span> Answers </span>
	</label>
	<div class="w-full flex flex-col gap-2">
		{#each question.options as option}
			<div class="flex gap-2">
				<input type="text" bind:value={option.value} />
				<button
					type="button"
					class="btn-icon btn-ghost-warning"
					on:click={() => handleDeleteOption(option.id)}>-</button
				>
			</div>
		{/each}
		{#if tooMany}
			<span class="text-red-600">Only 7 answers are allowed</span>
		{/if}
		<button
			type="button"
			class="btn-icon btn-ghost-primary"
			on:click={handleAddOption}
			disabled={tooMany}>+</button
		>
	</div>
</div>
