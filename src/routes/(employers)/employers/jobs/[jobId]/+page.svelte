<script lang="ts">
	import { Input, Radio, RadioGroup, Textarea } from '$lib/components';
	import type { IInput } from '$lib/types';
	import type { PageData, ActionData } from './$types';

	export let data: PageData;
	export let form: ActionData;

	let jobTypeInputs: IInput[] = [
		{
			name: 'jobType',
			label: 'Full Time',
			value: 'FULL_TIME'
		},
		{
			name: 'jobType',
			label: 'Part Time',
			value: 'PART_TIME'
		},
		{
			name: 'jobType',
			label: 'Contract',
			value: 'CONTRACT'
		}
	];

	let compTypeInputs: IInput[] = [
		{
			name: 'compType',
			label: 'Salary',
			value: 'SALARY'
		},
		{
			name: 'compType',
			label: 'Hourly',
			value: 'HOURLY'
		}
	];

	let jobLocTypeInputs: IInput[] = [
		{
			name: 'jobLocType',
			label: 'Remote',
			value: 'REMOTE'
		},
		{
			name: 'jobLocType',
			label: 'Hybrid',
			value: 'HYBRID'
		},
		{
			name: 'jobLocType',
			label: 'Office',
			value: 'OFFICE'
		}
	];

	$: ({ job } = data);
</script>

<form
	action="?/postJob"
	method="POST"
	class="flex flex-col items-center space-y-2 w-full max-w-lg mx-auto"
>
	<h1 class="text-white font-semibold text-3xl text-center">{job.title}</h1>
	<Input id="title" label="Job Title" value={job.title} />
	<Input id="location" label="Location" value={job.location} />
	<div class="w-full">
		<!-- svelte-ignore a11y-label-has-associated-control -->
		<label class="label font-medium text-start self-start">Pay Scale</label>
		<div class="flex justify-between w-full space-x-4">
			<Input
				id="payScaleBegin"
				label="Starting Pay Scale"
				type="number"
				value={job.payScaleBegin}
			/>
			<Input id="payScaleEnd" label="Ending Pay Scale" type="number" value={job.payScaleEnd} />
		</div>
		<div class="flex w-full max-w-lg flex-wrap md:flex-nowrap">
			<RadioGroup label="Type" inputList={jobTypeInputs} group={job.type} />
			<RadioGroup label="Compensation Type" inputList={compTypeInputs} group={job.compType} />
			<RadioGroup label="Location Type" inputList={jobLocTypeInputs} group={job.jobLocType} />
		</div>
	</div>
	<Textarea id="description" label="Job Description" />
	<div class="w-full">
		<button type="submit" class="btn btn-primary w-full"> Update Job Posting </button>
	</div>
</form>
