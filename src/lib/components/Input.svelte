<script lang="ts">
	interface $$Props extends Partial<svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['input']>> {
		id: string;
		label: string;
	}
	export let id: string;
	export let label: string;
</script>

<div class="form-control w-full max-w-lg mb-2">
	<label for={id} class="label font-medium pb-1">
		<span class="label-text">
			{label}
		</span>
	</label>
	<input class="input input-bordered w-full max-w-lg mb-2" name={id} {...$$restProps} />
</div>
