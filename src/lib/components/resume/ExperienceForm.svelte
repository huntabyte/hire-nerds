<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms'
	import { Input, Textarea } from '$lib/components'
	import toast from 'svelte-french-toast'

	export let showExperienceForm: boolean

	const submitCreateExperience: SubmitFunction = () => {
		return async ({ result, update }) => {
			switch (result.type) {
				case 'success':
					showExperienceForm = false
					toast.success('Experience added successfully!')
					break
				case 'invalid':
					toast.error('Invalid form data!')
				default:
					break
			}
			await update()
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
	<div class="flex gap-2">
		<Input id="startDate" label="Start Date" type="date" />
		<Input id="endDate" label="End Date" type="date" />
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
