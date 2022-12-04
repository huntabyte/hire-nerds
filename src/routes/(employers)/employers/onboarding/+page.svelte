<script lang="ts">
	import { Input } from '$lib/components';
</script>

<div class="flex w-full items-center justify-center">
	<form action="?/createOrganization" method="POST" class="w-full max-w-lg space-y-2">
		<h1 class="text-3xl text-white text-center">Create an organization</h1>
		<Input id="name" label="Company Name" />
		<Input id="website" label="Company Website" />
		<div class="w-full max-w-lg">
			<button type="submit" class="btn btn-primary w-full">Create Organization</button>
		</div>
	</form>
</div>
