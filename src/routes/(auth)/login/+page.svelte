<script lang="ts">
	import { Input } from '$lib/components'
</script>

<div class="flex flex-col w-full h-full p-2">
	<div class="card w-full p-8 max-w-lg  mx-auto">
		<div class="card-heading">
			<h1 class="text-3xl font-bold">Login</h1>
		</div>
		<form action="?/login" method="POST" class="card-body flex flex-col space-y-2 w-full">
			<Input id="email" type="email" label="Email" />
			<Input id="password" type="password" label="Password" />
			<div class="w-full">
				<button type="submit" class="btn btn-filled-primary w-full"> Login </button>
			</div>
		</form>
	</div>
</div>
