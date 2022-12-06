<script lang="ts">
	import { Input, Checkbox } from '$lib/components'
</script>

<div class="flex flex-col w-full h-full p-2">
	<div class="w-full px-8">
		<h1 class="text-3xl font-bold">Add Work Experience</h1>
		<form action="?/createExperience" method="POST" class="flex flex-col space-y-2 w-full max-w-lg">
			<Input id="jobTitle" type="text" label="Job Title" />
			<Input id="company" type="text" label="Company" />
			<Input id="location" type="text" label="City, State" />
			<Checkbox id="currentlyEmployed" label="Currently Employed" />
			<div class="flex space-x-3">
				<Input id="employedFrom" type="date" label="From" />
				<Input id="employedTo" type="date" label="To" />
			</div>
			<Input id="description" type="text" label="Description" />
			<div class="w-full max-w-lg">
				<button type="submit" class="btn btn-primary w-full"> Add Experience </button>
			</div>
		</form>
	</div>
</div>
