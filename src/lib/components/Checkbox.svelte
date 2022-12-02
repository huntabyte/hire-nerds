<script lang="ts">
	interface $$Props extends Partial<svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['input']>> {
		id: string;
		label: string;
	}
	export let id: string;
	export let label: string;
</script>

<div class="form-control w-full max-w-lg mb-2">
	<label class="label cursor-pointer justify-start space-x-3">
		<input name={id} type="checkbox" class="checkbox checkbox-primary" />
		<span class="label-text">{label}</span>
	</label>
</div>
