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

<form action="?/postJob" method="POST" class="flex flex-col mx-auto gap-4 p-4 max-w-2xl">
	<h1>{job.title}</h1>
	<fieldset>
		<span>Information</span>
		<Input id="title" label="Job Title" type="text" value={job.title} />
		<Input id="location" label="Location" type="text" value={job.location} />
		<Textarea id="description" label="Job Description" />
	</fieldset>

	<fieldset>
		<span>Pay Scale</span>
		<Input id="payScaleBegin" label="Starting Pay Scale" type="number" value={job.payScaleBegin} />

		<Input id="payScaleEnd" label="Ending Pay Scale" type="number" value={job.payScaleEnd} />
	</fieldset>
	<fieldset>
		<span>Additional Info</span>
		<RadioGroup label="Type" inputList={jobTypeInputs} />
		<RadioGroup label="Compensation Type" inputList={compTypeInputs} />
		<RadioGroup label="Location Type" inputList={jobLocTypeInputs} />
	</fieldset>

	<div>
		<button type="submit" class="btn bg-primary-500 btn-base text-white">
			Update Job Posting
		</button>
	</div>
</form>
