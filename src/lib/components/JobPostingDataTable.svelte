<script lang="ts">
	// @ts-ignore
	import {
		// Utilities
		createDataTableStore,
		dataTableHandler,
		// Svelte Actions
		tableInteraction,
		tableA11y,
		Paginator
	} from '@skeletonlabs/skeleton'
	import { jobType, jobCompType, jobLocType } from '$lib/constants'
	import { formatDistanceToNowStrict } from 'date-fns'
	import type { JobsWithCount } from '$lib/types'

	const nf = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD'
	})

	export let sourceData: JobsWithCount[]

	const dataTableStore = createDataTableStore(
		// Pass your source data here:
		sourceData,
		// Provide optional settings:
		{
			// The current search term.
			search: '',
			// The current sort key.
			sort: '',
			// Paginator component settings.
			pagination: { offset: 0, limit: 5, size: 0, amounts: [1, 2, 5, 10] }
		}
	)

	// Automatically handles search, sort, etc when the model updates.
	dataTableStore.subscribe((model) => dataTableHandler(model))
</script>

<section class="card !bg-surface-800/50">
	<div class="card-header">
		<input bind:value={$dataTableStore.search} type="search" placeholder="Search Table..." />
	</div>
	<div class="p-4">
		<div class="table-container">
			<table class="table table-hover" role="grid" use:tableInteraction use:tableA11y>
				<thead
					on:click={(e) => {
						dataTableStore.sort(e)
					}}
					on:keypress
				>
					<tr>
						<th
							><input
								type="checkbox"
								on:click={(e) => {
									dataTableStore.selectAll(e.currentTarget.checked)
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
					{#each $dataTableStore.filtered as row}
						<tr class:table-row-checked={row.dataTableChecked}>
							<td><input type="checkbox" bind:checked={row.dataTableChecked} /></td>
							<td class="md:!whitespace-normal capitalize">{row.title}</td>
							<td class="md:!whitespace-normal capitalize">{row.location}</td>
							<td class="md:!whitespace-normal capitalize">{jobType[`${row.jobType}`]}</td>
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
								{#if row.status === 'DRAFT'}
									<span class="badge bg-yellow-500 text-surface-900">{row.status}</span>
								{:else if row.status === 'OPEN'}
									<span class="badge bg-accent-500">{row.status}</span>
								{:else if row.status === 'CLOSED'}
									<span class="badge bg-warning-500">{row.status}</span>
								{:else if row.status === 'PAUSED'}
									<span class="badge bg-surface-800">{row.status}</span>
								{/if}
							</td>
							<td role="gridcell" aria-colindex={6} tabindex="0" class="table-cell-fit">
								<a href="/employers/jobs/{row.id}" class="btn btn-ghost-surface btn-sm"> Manage </a>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
	<div class="card-footer">
		{#if $dataTableStore.pagination}<Paginator bind:settings={$dataTableStore.pagination} />{/if}
	</div>
</section>
