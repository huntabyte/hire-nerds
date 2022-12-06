<script lang="ts">
	interface $$Props extends Partial<svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['input']>> {
		label: string;
		group: string;
	}

	export let label: string;
	export let group: string;
</script>

<div>
	<label>
		<input type="radio" bind:group />
		<span>{label}</span>
	</label>
</div>
