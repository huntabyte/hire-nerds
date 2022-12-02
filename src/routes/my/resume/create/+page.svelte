<script lang="ts">
	import { Input } from '$lib/components';
</script>

<div class="flex flex-col w-full h-full p-2">
	<div class="w-full px-8">
		<h1 class="text-3xl font-bold">Create Resume</h1>
		<form action="?/createResume" method="POST" class="flex flex-col space-y-2 w-full">
			<Input id="firstName" type="text" label="First Name" />
			<Input id="lastName" type="text" label="Last Name" />
			<Input id="location" type="text" label="City, State" />
			<div class="w-full max-w-lg">
				<button type="submit" class="btn btn-primary w-full"> Build Resume </button>
			</div>
		</form>
	</div>
</div>
