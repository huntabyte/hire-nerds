<script lang="ts">
	import { page } from '$app/stores'
	import { slide } from 'svelte/transition'
	import { quadIn, quadOut } from 'svelte/easing'
	import { QuestionMultipleChoice, QuestionCustomResponse } from '$lib/components'
	import { questionType } from '$lib/constants'
	import { goto } from '$app/navigation'
	import toast from 'svelte-french-toast'

	export let questions: any[] = [
		{
			id: crypto.randomUUID(),
			question: {
				title: ''
			},
			type: ''
		}
	]

	let numQuestions: number
	let tooMany = false

	const handleAddQuestion = () => {
		if (numQuestions >= 8) {
			tooMany = true
			return
		}
		numQuestions = numQuestions + 1

		questions = [
			...questions,
			{
				id: crypto.randomUUID(),
				question: {
					title: ''
				},
				type: ''
			}
		]
	}

	const handleDeleteQuestion = (id: string) => {
		console.log('delete question id:', id)
		questions = questions.filter((question) => question.id !== id)
	}

	const inTransitionParams = {
		delay: 0,
		duration: 200,
		easing: quadIn
	}
	const outTransitionParams = {
		delay: 0,
		duration: 150,
		easing: quadOut
	}

	const handleSubmitQuestions = async () => {
		const res = await fetch(`/employers/jobs/${$page.data.job.id}/questions`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(questions)
		})

		console.log(res)

		if (res.ok) {
			toast.success('Questions updated!')
			goto(`/employers/jobs`)
		} else {
			toast.error('Something went wrong. Please try again.')
		}
	}
</script>

<div class="w-full flex flex-col gap-4 p-4">
	{#each questions as question}
		<div class="w-full flex flex-col gap-3 border border-surface-600/75 p-4 relative rounded-lg">
			{#if question.type === ''}
				<span in:slide={inTransitionParams} out:slide={outTransitionParams}>
					<h5 class="leading-none pb-2">Select question type</h5>
					<button
						type="button"
						class="btn btn-ghost-primary "
						on:click={() => (question.type = questionType.MULTIPLE_CHOICE)}>Multiple Choice</button
					>
					<button
						type="submit"
						class="btn btn-ghost-primary"
						on:click={() => (question.type = questionType.SHORT_ANSWER)}>Custom Response</button
					>
				</span>
			{/if}
			{#if question.type === questionType.MULTIPLE_CHOICE}
				<span in:slide={inTransitionParams}>
					<button
						type="button"
						class="btn btn-icon btn-filled-warning absolute -top-3 -right-3"
						on:click={() => handleDeleteQuestion(question.id)}>X</button
					>

					<QuestionMultipleChoice bind:question={question.question} />
				</span>
			{/if}

			{#if question.type === questionType.SHORT_ANSWER}
				<span in:slide={inTransitionParams}>
					<button
						type="button"
						class="btn btn-icon btn-filled-warning absolute -top-3 -right-3"
						on:click={() => handleDeleteQuestion(question.id)}>X</button
					>

					<QuestionCustomResponse bind:question={question.question} />
				</span>
			{/if}
		</div>
	{/each}
	<div class="flex w-full gap-2 pt-6">
		<button type="button" class="btn btn-filled-primary w-full" on:click={() => handleAddQuestion()}
			>Add Another Question</button
		>
		<button type="button" class="btn btn-ghost-primary w-full" on:click={handleSubmitQuestions}
			>Finish</button
		>
	</div>
</div>
