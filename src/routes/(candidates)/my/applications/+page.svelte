<script lang="ts">
	import { formatDistanceToNowStrict } from 'date-fns'
	import type { PageData } from './$types'

	export let data: PageData

	$: ({ applications } = data)
</script>

<section class="card !bg-accent-500/5">
	<div class="card-header">
		<h3>Your Applications</h3>
	</div>
	<div class="card-body">
		<div class="table-container">
			<table class="table table-hover">
				<thead>
					<tr>
						<th>Job Title</th>
						<th>Company</th>
						<th>Location</th>
						<th>Applied</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>
					{#each applications as row, i}
						<tr>
							<td>
								<a href="/jobs/{row.job.id}">
									{row.job.title}
								</a>
							</td>
							<td>
								{row.job.organization.name}
							</td>
							<td>{row.job.location}</td>
							<td>{formatDistanceToNowStrict(row.createdAt)} ago</td>
							<td>
								<span class="badge bg-primary-500">{row.job.status}</span>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
</section>
