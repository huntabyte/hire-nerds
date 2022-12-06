<script lang="ts">
	import { Input, Radio } from '$lib/components'
	import Textarea from '$lib/components/Textarea.svelte'
	import type { PageData, ActionData } from './$types'

	export let data: PageData
	export let form: ActionData
</script>

<form
	action="?/postJob"
	method="POST"
	class="flex flex-col items-center space-y-2 w-full max-w-lg mx-auto"
>
	<h1 class="text-white font-semibold text-3xl text-center">Post a job</h1>
	<Input id="title" label="Job Title" />
	<Input id="location" label="Location" />
	<div class="w-full">
		<!-- svelte-ignore a11y-label-has-associated-control -->
		<label class="label font-medium text-start self-start">Pay Scale</label>
		<div class="flex justify-between w-full space-x-4">
			<Input id="payScaleBegin" label="Starting Pay Scale" type="number" />
			<Input id="payScaleEnd" label="Ending Pay Scale" type="number" />
		</div>
		<div class="flex w-full max-w-lg flex-wrap md:flex-nowrap">
			<fieldset class="max-w-lg flex-1">
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label class="label font-medium pb-1">Type</label>
				<Radio name="type" label="Full-time" value="FULL_TIME" />
				<Radio name="type" label="Part-time" value="PART_TIME" />
				<Radio name="type" label="Contract" value="CONTRACT" />
			</fieldset>
			<fieldset class="max-w-lg flex-1">
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label class="label font-medium pb-1">Comp Type</label>
				<Radio name="compType" label="Salary" value="SALARY" />
				<Radio name="compType" label="Hourly" value="HOURLY" />
			</fieldset>
			<fieldset class="max-w-lg flex-2">
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label class="label font-medium pb-1">Location Type</label>
				<Radio name="jobLocType" label="Remote" value="REMOTE" />
				<Radio name="jobLocType" label="Hybrid" value="HYBRID" />
				<Radio name="jobLocType" label="Office" value="OFFICE" />
			</fieldset>
		</div>
	</div>
	<Textarea id="description" label="Job Description" />
	<div class="w-full">
		<button type="submit" class="btn btn-primary w-full"> Post job </button>
	</div>
</form>
