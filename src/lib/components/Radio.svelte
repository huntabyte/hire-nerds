<script lang="ts">
	interface $$Props extends Partial<svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['input']>> {
		label: string;
	}

	export let label: string;
</script>

<div class="form-control ">
	<label class="label cursor-pointer justify-start space-x-4">
		<input type="radio" class="radio checked:bg-blue-500" {...$$restProps} />
		<span class="label-text">{label}</span>
	</label>
</div>
