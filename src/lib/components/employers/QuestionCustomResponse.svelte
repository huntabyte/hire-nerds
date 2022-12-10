<script lang="ts">
	import type { CustomResponse } from '$lib/types'

	export let question: CustomResponse
</script>

<div class="w-full">
	<label for="">
		<span> Question </span>
	</label>
	<input type="text" bind:value={question.title} />
</div>
