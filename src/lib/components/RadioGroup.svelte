<script lang="ts">
	import type { IInput } from '$lib/types';

	export let inputList: IInput[];

	export let label: string;
	export let group: string;
</script>

<fieldset class="max-w-lg flex-1">
	<!-- svelte-ignore a11y-label-has-associated-control -->
	<label class="label font-medium pb-1">{label}</label>
	{#each inputList as i}
		<div class="form-control ">
			<label class="label cursor-pointer justify-start space-x-4">
				<input
					type="radio"
					name={i.name}
					class="radio checked:bg-blue-500"
					bind:group
					value={i.value}
				/>
				<span class="label-text">{i.label}</span>
			</label>
		</div>
	{/each}
</fieldset>
