<script lang="ts">
	import type { JobApplicationWithResume } from '$lib/types'
	import {
		// Utilities
		createDataTableStore,
		dataTableHandler,
		// Svelte Actions
		tableInteraction,
		tableA11y,
		Paginator
	} from '@skeletonlabs/skeleton'

	export let sourceData: JobApplicationWithResume[]

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

	// This automatically handles search, sort, etc when the model updates.
	dataTableStore.subscribe((model) => dataTableHandler(model))
</script>

<section class="card !bg-accent-500/5">
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
						<th data-sort="lastName">Candidate Name</th>
						<th data-sort="location">Location</th>
						<th>Rating</th>
						<th data-sort="status">Status</th>
						<th />
					</tr>
				</thead>
				<tbody>
					{#each $dataTableStore.filtered as row, rowIndex}
						<tr class:table-row-checked={row.dataTableChecked}>
							<td><input type="checkbox" bind:checked={row.dataTableChecked} /></td>
							<td class="md:!whitespace-normal capitalize"
								>{row.resume.firstName} {row.resume.lastName}</td
							>
							<td class="md:!whitespace-normal capitalize">{row.resume.location}</td>
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
		{#if $dataTableStore.pagination}<Paginator bind:settings={$dataTableStore.pagination} />{/if}
	</div>
</section>
