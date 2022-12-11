<script lang="ts">
	import type { Job, Organization } from '@prisma/client'

	interface JobOrg extends Job {
		organization: Organization
	}

	export let job: JobOrg
</script>

<div class="card p-4">
	<div class="card-heading">
		<h2 class="card-title">{job.title} - {job.organization.name}</h2>
	</div>
	<div class="card-body">
		<p>{job.description}</p>
		<a href="/jobs/{job.id}" class="btn btn-filled-primary">View Job</a>
	</div>
</div>
