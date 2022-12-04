<script lang="ts">
	import type { Job, Organization } from '@prisma/client';

	interface JobOrg extends Job {
		organization: Organization;
	}

	export let job: JobOrg;
</script>

<div class="card bg-base-300 shadow-xl">
	<div class="card-body">
		<h2 class="card-title">{job.title} - {job.organization.name}</h2>
		<p>{job.description}</p>
		<div class="card-actions justify-end">
			<a href="/jobs/{job.id}" class="btn btn-primary">View Job</a>
		</div>
	</div>
</div>
