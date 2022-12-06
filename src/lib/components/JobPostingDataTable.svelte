<script lang="ts">
	// @ts-ignore
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
	import { jobType, jobCompType, jobLocType } from '$lib/constants'
	import { formatDistanceToNowStrict } from 'date-fns'

	const nf = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD'
	})

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
	<div class="card-body">
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
						<th data-sort="lastName">Title</th>
						<th data-sort="location">Location</th>
						<th data-sort="type">Type</th>
						<th data-sort="payScaleBegin">Pay Scale</th>
						<th data-sort="compType">Comp Type</th>
						<th data-sort="jobLocType">Location Type</th>
						<th data-sort="_count.applications">Applicants</th>
						<th data-sort="createdAt">Posted</th>
						<th data-sort="status">Status</th>
						<th />
					</tr>
				</thead>
				<tbody>
					{#each $dataTableModel.filtered as row}
						<tr class:table-row-checked={row.dataTableChecked}>
							<td><input type="checkbox" bind:checked={row.dataTableChecked} /></td>
							<td class="md:!whitespace-normal capitalize">{row.title}</td>
							<td class="md:!whitespace-normal capitalize">{row.location}</td>
							<td class="md:!whitespace-normal capitalize">{jobType[`${row.type}`]}</td>
							<td class="md:!whitespace-normal capitalize"
								>{nf.formatRange(row.payScaleBegin, row.payScaleEnd)}
							</td>
							<td class="md:!whitespace-normal capitalize">{jobCompType[`${row.compType}`]}</td>
							<td class="md:!whitespace-normal capitalize">{jobLocType[`${row.jobLocType}`]}</td>
							<td class="md:!whitespace-normal capitalize">
								<a href="/employers/jobs/{row.id}/applications">
									{row['_count'].applications}
								</a>
							</td>
							<td class="md:!whitespace-normal">{formatDistanceToNowStrict(row.createdAt)} ago</td>
							<td class="md:!whitespace-normal capitalize">
								<span class="badge bg-primary-500">{row.status}</span>
							</td>
							<td role="gridcell" aria-colindex={6} tabindex="0" class="table-cell-fit">
								<a href="/employers/jobs/{row.id}" class="btn btn-ghost-surface btn-sm">
									View Job
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
