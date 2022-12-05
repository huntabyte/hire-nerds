<script lang="ts">
	interface $$Props extends Partial<svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['input']>> {
		label: string;
		group: string;
	}

	export let label: string;
	export let group: string;
</script>

<div class="form-control ">
	<label class="label cursor-pointer justify-start space-x-4">
		<input type="radio" class="radio checked:bg-blue-500" bind:group />
		<span class="label-text">{label}</span>
	</label>
</div>
