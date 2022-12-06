<script lang="ts">
	import { Input } from '$lib/components'
</script>

<div class="flex w-full items-center justify-center p-4">
	<form action="?/createOrganization" method="POST" class="w-full max-w-lg space-y-2">
		<h1 class="text-3xl text-white text-center">Create an organization</h1>
		<Input id="name" type="text" label="Company Name" />
		<Input id="website" type="text" label="Company Website" />
		<div class="w-full max-w-lg pt-2">
			<button type="submit" class="btn bg-primary-500 w-full">Create Organization</button>
		</div>
		<div class="w-full max-w-lg pt-2">
			<a href="/" class="btn btn-ghost-warning  w-full">Nevermind, Go back</a>
		</div>
	</form>
</div>
