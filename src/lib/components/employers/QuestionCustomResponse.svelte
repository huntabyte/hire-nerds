<script lang="ts">
	export let question: any
</script>

<div class="w-full">
	<label for="">
		<span> Question </span>
	</label>
	<input type="text" bind:value={question.title} />
</div>
