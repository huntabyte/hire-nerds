<script lang="ts">
	import type { MultipleChoice } from '$lib/types'

	export let question: MultipleChoice
	type Choice = {
		id: string
		choice: string
	}

	let choices: Choice[] = [
		{
			id: crypto.randomUUID(),
			choice: ''
		}
	]

	let numChoices: number
	let tooMany = false

	const handleAddChoice = () => {
		if (numChoices >= 8) {
			tooMany = true
			return
		}
		numChoices = numChoices + 1

		choices = [
			...choices,
			{
				id: crypto.randomUUID(),
				choice: ''
			}
		]
	}

	const handleDeleteChoice = (id: string) => {
		choices = choices.filter((choice) => choice.id !== id)
	}

	$: numChoices = choices.length
</script>

<div class="w-full">
	<label for="">
		<span> Question </span>
	</label>
	<input type="text" bind:value={question.title} />
</div>
<div class="w-full">
	<label for="">
		<span> Choices </span>
	</label>
	<div class="w-full flex flex-col gap-2">
		{#each choices as choice}
			<div class="flex gap-2">
				<input type="text" bind:value={choice.choice} />
				<button
					type="button"
					class="btn-icon btn-ghost-warning"
					on:click={() => handleDeleteChoice(choice.id)}>-</button
				>
			</div>
		{/each}
		{#if tooMany}
			<span class="text-red-600">Only 7 choices are allowed</span>
		{/if}
		<button
			type="button"
			class="btn-icon btn-ghost-primary"
			on:click={handleAddChoice}
			disabled={tooMany}>+</button
		>
	</div>
</div>
