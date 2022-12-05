<script lang="ts">
	import {
		// Types
		type DataTableModel,
		// Utilities
		dataTableHandler,
		dataTableSelect,
		dataTableSelectAll,
		dataTableSort,
		// Svelte Actions
		tableInteraction,
		tableA11y,
		Paginator
	} from '@skeletonlabs/skeleton';
	import { writable, type Writable } from 'svelte/store';

	export let sourceData: any[];

	const dataTableModel: Writable<DataTableModel> = writable({
		// The original unfiltered source data.
		source: sourceData,
		// The filtered source data, shown in UI.
		filtered: sourceData,
		// Optional: An array of selected row objects.
		selection: [],
		// Optional: The current search term.
		search: '',
		// Optional: The current sort key.
		sort: '',
		// Optional: The Paginator component settings.
		pagination: { offset: 0, limit: 5, size: 0, amounts: [1, 2, 5, 10] }
	});

	// Automatically handles search, sort, etc when the model updates.
	dataTableModel.subscribe((v) => dataTableHandler(v));
</script>

<input bind:value={$dataTableModel.search} type="search" placeholder="Search..." />
<div class="table-container">
	<table class="table table-hover" use:tableInteraction>
		<thead
			on:click={(e) => {
				dataTableSort(e, dataTableModel);
			}}
			on:keypress
		>
			<tr>
				<th
					><input
						type="checkbox"
						on:click={(e) => {
							dataTableSelectAll(e, dataTableModel);
						}}
					/></th
				>
				{#each Object.keys(sourceData[0]) as key}
					<th data-sort={key}>{key}</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each $dataTableModel.filtered as row, rowIndex}
				<tr class:table-row-checked={row.dataTableChecked}>
					<td><input type="checkbox" bind:checked={row.dataTableChecked} /></td>
					{#each Object.values(row) as value}
						<td>{value}</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>
{#if $dataTableModel.pagination}<Paginator bind:settings={$dataTableModel.pagination} />{/if}
