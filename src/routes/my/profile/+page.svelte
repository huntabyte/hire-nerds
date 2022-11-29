<script lang="ts">
	import type { PageData } from './$types';
	import { Input } from '$lib/components';

	export let data: PageData;
</script>

<form action="?/updateProfile" method="POST" class="flex flex-col space-y-2 w-full max-w-lg">
	<Input id="firstName" label="First Name" value={data.profile?.firstName} />
	<Input id="lastName" label="Last Name" value={data.profile?.lastName} />
	<div class="w-full max-w-lg pt-2">
		<button type="submit" class="btn btn-primary w-full">Update Profile</button>
	</div>
</form>
