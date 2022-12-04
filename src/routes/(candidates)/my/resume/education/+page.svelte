<script lang="ts">
	import { Input, Checkbox } from '$lib/components';
</script>

<div class="flex flex-col w-full h-full p-2">
	<div class="w-full px-8">
		<h1 class="text-3xl font-bold">Create Resume</h1>
		<form action="?/createEducation" method="POST" class="flex flex-col space-y-2 w-full max-w-lg">
			<Input id="educationLevel" type="text" label="Education Level" />
			<Input id="field" type="text" label="Field of Study" />
			<Input id="school" type="text" label="School" />
			<Input id="location" type="text" label="City, State" />
			<Checkbox id="currentlyEnrolled" label="Currently Enrolled" />
			<div class="flex space-x-3">
				<Input id="enrolledFrom" type="date" label="From" />
				<Input id="enrolledTo" type="date" label="To" />
			</div>
			<div class="w-full max-w-lg">
				<button type="submit" class="btn btn-primary w-full"> Save Education </button>
			</div>
		</form>
	</div>
</div>
