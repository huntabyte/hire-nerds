<script lang="ts">
	import { Input } from '$lib/components'
</script>

<div class="flex flex-col w-full h-full p-2">
	<div class="w-full px-8">
		<h1 class="text-3xl font-bold">Register</h1>
		<form action="?/register" method="POST" class="flex flex-col space-y-2 w-full">
			<Input id="email" type="email" label="Email" />
			<Input id="password" type="password" label="Password" />
			<Input id="passwordConfirm" type="password" label="Confirm Password" />
			<div class="w-full max-w-lg">
				<button type="submit" class="btn btn-primary w-full"> Register </button>
			</div>
		</form>
	</div>
</div>
