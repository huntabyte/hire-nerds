<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms'
	import { Input } from '$lib/components'
	import SlideToggle from '@skeletonlabs/skeleton/components/SlideToggle/SlideToggle.svelte'
	import toast from 'svelte-french-toast'

	export let showEducationForm: boolean
	export let currentlyEnrolled = false

	const submitCreateEducation: SubmitFunction = () => {
		return async ({ result, update }) => {
			switch (result.type) {
				case 'success':
					showEducationForm = false
					toast.success('Experience added successfully!')
					await update()
					break
				case 'failure':
					toast.error('Invalid form data!')
					await update()
				case 'error':
					toast.error('Failed to add experience. Please try again later.')
					break
				default:
					break
			}
		}
	}
</script>

<form
	action="?/createEducation"
	method="POST"
	class="flex flex-col w-full gap-2 py-2"
	use:enhance={submitCreateEducation}
>
	<Input id="educationLevel" label="Education Level" type="text" />
	<Input id="field" label="Field of Study" type="text" />
	<Input id="school" label="School" type="text" />
	<Input id="location" label="Location" type="text" />
	<span class="w-max">
		<SlideToggle bind:checked={currentlyEnrolled}>Currently Enrolled</SlideToggle>
	</span>
	<div class="flex gap-2">
		<span class="w-1/2">
			<Input id="enrolledFrom" label="Enrolled From" type="date" />
		</span>
		{#if !currentlyEnrolled}
			<Input id="enrolledTo" label="Enrolled To" type="date" />
		{/if}
	</div>

	<div class="flex gap-2">
		<button type="submit" class="btn btn-filled-primary">Add</button>
		<button type="button" class="btn btn-ghost-warning" on:click={() => (showEducationForm = false)}
			>Cancel</button
		>
	</div>
</form>
