<script lang="ts">
	import { Input } from '$lib/components'
</script>

<div class="flex flex-col w-full h-full p-2">
	<div class="w-full px-8">
		<h1 class="text-3xl font-bold">Add Skills</h1>
		<form action="?/createSkill" method="POST" class="flex flex-col space-y-2 w-full max-w-lg">
			<Input id="name" type="text" label="Name" />
			<div class="w-full max-w-lg">
				<button type="submit" class="btn btn-primary w-full"> Add Skill </button>
			</div>
		</form>
	</div>
</div>
