<script lang="ts">
	import type { Job, JobApplication } from '@prisma/client';

	interface IJob extends Job {
		applications: JobApplication[];
	}
	export let jobs: IJob[];
</script>

<div class="overflow-x-auto w-full">
	<table class="table w-full">
		<!-- head -->
		<thead>
			<tr>
				<th>
					<label>
						<input type="checkbox" class="checkbox" />
					</label>
				</th>
				<th>Job Title</th>
				<th>Applications</th>
				<th>Age</th>
				<th />
			</tr>
		</thead>
		<tbody>
			{#each jobs as job}
				<!-- row 1 -->
				<tr>
					<th>
						<label>
							<input type="checkbox" class="checkbox" />
						</label>
					</th>
					<td>
						<div class="flex items-center space-x-3">
							<div>
								<div class="font-bold">{job.title}</div>
								<div class="text-sm opacity-50">📍{job.location}</div>
							</div>
						</div>
					</td>
					<td>
						<a href="/employers/jobs/{job.id}/applications" class="badge badge-ghost "
							>{job.applications.length}</a
						>
					</td>
					<td>1d</td>
					<th>
						<a href="/employers/jobs/{job.id}" class="btn btn-ghost btn-xs">details</a>
					</th>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
