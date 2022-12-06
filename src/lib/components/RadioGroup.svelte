<script lang="ts">
	import { writable, type Writable } from 'svelte/store';
	import type { IInput } from '$lib/types';
	import { RadioItem } from '$lib/components';
	import { RadioGroup } from '@skeletonlabs/skeleton';

	export let inputList: IInput[];

	export let label: string;

	const storeLayout: Writable<string> = writable('horz');
</script>

<label for=""><span>{label}</span></label>
<RadioGroup selected={storeLayout} class="mb-2">
	{#each inputList as input}
		<RadioItem value={input.value} name={input.name}>
			{input.label}
		</RadioItem>
	{/each}
</RadioGroup>
