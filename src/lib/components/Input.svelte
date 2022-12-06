<script lang="ts">
	interface $$Props extends Partial<svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['input']>> {
		id: string;
		label: string;
	}
	export let id: string;
	export let label: string;
</script>

<label for={id} class="mb-2">
	<span>
		{label}
	</span>
	<input name={id} {...$$restProps} />
</label>

<style>
	label {
		flex: 1;
	}
</style>
