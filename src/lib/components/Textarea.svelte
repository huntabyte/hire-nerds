<script lang="ts">
	interface $$Props extends Partial<svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['textarea']>> {
		id: string;
		label: string;
	}
	export let id: string;
	export let label: string;
</script>

<div>
	<label for={id}>
		<span>
			{label}
		</span>
	</label>
	<textarea name={id} {...$$restProps} />
</div>
