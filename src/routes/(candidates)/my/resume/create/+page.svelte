<script lang="ts">
	import { Input } from '$lib/components'
</script>

<div class="flex flex-col w-full h-full p-2">
	<div class="w-full p-4 card">
		<div class="card-heading">
			<h1 class="text-3xl font-bold">Create Resume</h1>
		</div>
		<form action="?/createResume" method="POST" class="flex flex-col space-y-2 w-full p-4">
			<Input id="firstName" type="text" label="First Name" />
			<Input id="lastName" type="text" label="Last Name" />
			<Input id="location" type="text" label="City, State" />
			<div class="w-full">
				<button type="submit" class="btn btn-filled-primary w-full"> Start Resume </button>
			</div>
		</form>
	</div>
</div>
