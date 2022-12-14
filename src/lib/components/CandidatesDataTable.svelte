<script lang="ts">
	import {
		// Types
		type DataTableModel,
		// Utilities
		dataTableHandler,
		dataTableSelectAll,
		dataTableSort,
		// Svelte Actions
		tableInteraction,
		tableA11y,
		Paginator
	} from '@skeletonlabs/skeleton'
	import { writable, type Writable } from 'svelte/store'

	export let sourceData: any[]

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
	})

	// Automatically handles search, sort, etc when the model updates.
	dataTableModel.subscribe((v) => dataTableHandler(v))
</script>

<section class="card !bg-accent-500/5">
	<div class="card-header">
		<input bind:value={$dataTableModel.search} type="search" placeholder="Search Table..." />
	</div>
	<div class="p-4">
		<div class="table-container">
			<table class="table table-hover" role="grid" use:tableInteraction use:tableA11y>
				<thead
					on:click={(e) => {
						dataTableSort(e, dataTableModel)
					}}
					on:keypress
				>
					<tr>
						<th
							><input
								type="checkbox"
								on:click={(e) => {
									dataTableSelectAll(e, dataTableModel)
								}}
							/></th
						>
						<th data-sort="lastName">Candidate Name</th>
						<th data-sort="location">Location</th>
						<th>Rating</th>
						<th data-sort="status">Status</th>
						<th />
					</tr>
				</thead>
				<tbody>
					{#each $dataTableModel.filtered as row, rowIndex}
						<tr class:table-row-checked={row.dataTableChecked}>
							<td><input type="checkbox" bind:checked={row.dataTableChecked} /></td>
							<td class="md:!whitespace-normal capitalize">{row.firstName} {row.lastName}</td>
							<td class="md:!whitespace-normal capitalize">{row.location}</td>
							<td class="md:!whitespace-normal capitalize">5/10</td>
							<td class="md:!whitespace-normal capitalize">
								<span class="badge bg-primary-500">{row.status}</span>
							</td>
							<td role="gridcell" aria-colindex={6} tabindex="0" class="table-cell-fit">
								<a
									href="/employers/jobs/{row.jobId}/applications/{row.id}"
									class="btn btn-ghost-surface btn-sm"
								>
									View Application
								</a>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
	<div class="card-footer">
		{#if $dataTableModel.pagination}<Paginator bind:settings={$dataTableModel.pagination} />{/if}
	</div>
</section>
