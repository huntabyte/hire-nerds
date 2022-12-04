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
							<div class="avatar">
								<div class="mask mask-squircle w-12 h-12">
									<img
										src="/tailwind-css-component-profile-2@56w.png"
										alt="Avatar Tailwind CSS Component"
									/>
								</div>
							</div>
							<div>
								<div class="font-bold">{job.title}</div>
								<div class="text-sm opacity-50">{job.location}</div>
							</div>
						</div>
					</td>
					<td>
						<span class="badge badge-ghost ">{job.applications.length}</span>
					</td>
					<td>1d</td>
					<th>
						<button class="btn btn-ghost btn-xs">details</button>
					</th>
				</tr>
			{/each}
		</tbody>
		<!-- foot -->
		<tfoot>
			<tr>
				<th />
				<th>Name</th>
				<th>Job</th>
				<th>Favorite Color</th>
				<th />
			</tr>
		</tfoot>
	</table>
</div>
