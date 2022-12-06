<script lang="ts">
	interface $$Props extends Partial<svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['input']>> {
		id: string;
		label: string;
	}
	export let id: string;
	export let label: string;
</script>

<div>
	<label>
		<input name={id} type="checkbox" />
		<span>{label}</span>
	</label>
</div>
