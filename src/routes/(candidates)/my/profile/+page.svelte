<script lang="ts">
	import type { PageData } from './$types'
	import { Input } from '$lib/components'

	export let data: PageData
</script>

<div class="flex flex-col items-center mx-auto w-full p-4">
	<form action="?/updateProfile" method="POST" class="flex flex-col space-y-2 w-full max-w-xl ">
		<fieldset>
			<Input id="firstName" label="First Name" type="text" value={data.profile?.firstName} />
			<Input id="lastName" label="Last Name" type="text" value={data.profile?.lastName} />
		</fieldset>
		<div class="w-full pt-2">
			<button type="submit" class="btn btn-filled-primary w-full">Update Profile</button>
		</div>
	</form>
</div>
