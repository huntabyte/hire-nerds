<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms'
	import { Input, Textarea } from '$lib/components'
	import { SlideToggle } from '@skeletonlabs/skeleton'
	import toast from 'svelte-french-toast'

	export let showExperienceForm: boolean

	let currentlyEmployed = false

	const submitCreateExperience: SubmitFunction = () => {
		return async ({ result, update }) => {
			switch (result.type) {
				case 'success':
					showExperienceForm = false
					toast.success('Experience added successfully!')
					await update()
					break
				case 'failure':
					toast.error('Invalid form data!')
					await update()
					break
				case 'error':
					toast.error('Failed to add experience. Please try again later.')
				default:
					break
			}
		}
	}
</script>

<form
	action="?/createExperience"
	method="POST"
	class="flex flex-col w-full gap-2 py-2"
	use:enhance={submitCreateExperience}
>
	<Input id="jobTitle" label="Job Title" type="text" />
	<Input id="company" label="Company" type="text" />
	<Input id="location" label="Location" type="text" />
	<span class="w-max">
		<SlideToggle bind:checked={currentlyEmployed}>Currently Employed</SlideToggle>
	</span>
	<div class="flex gap-2">
		<span class="w-1/2">
			<Input id="startDate" label="Start Date" type="date" />
		</span>
		{#if !currentlyEmployed}
			<Input id="endDate" label="End Date" type="date" />
		{/if}
	</div>
	<Textarea id="description" label="Description" type="textarea" />

	<div class="flex gap-2">
		<button type="submit" class="btn btn-filled-primary">Add</button>
		<button
			type="button"
			class="btn btn-ghost-warning"
			on:click={() => (showExperienceForm = false)}>Cancel</button
		>
	</div>
</form>
