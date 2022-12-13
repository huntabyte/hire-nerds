<script lang="ts">
	import type { Job, Organization } from '@prisma/client'
	import { LocationIcon, LocationCityIcon } from '$lib/components/icons'

	interface JobOrg extends Job {
		organization: Organization
	}

	export let job: JobOrg
</script>

<div class="overflow-hidden shadow sm:rounded-md">
	<a href="/jobs/{job.id}" class="block bg-surface-800">
		<div class="px-4 py-4 sm:px-6">
			<div class="flex items-center justify-between">
				<p class="truncate text-sm font-medium">
					<span class="text-primary-500"> {job.title} </span>
				</p>
				<div class="ml-2 flex flex-shrink-0">
					<span
						class="inline-flex rounded-full px-2 text-sm font-semibold leading-5 badge bg-accent-500 text-surface-50"
						>Full-time</span
					>
				</div>
			</div>
			<div class="mt-2 sm:flex sm:justify-between">
				<div class="sm:flex">
					<p class="flex items-center text-sm ">
						<LocationCityIcon />
						{job.organization.name}
					</p>
					<p class="mt-2 flex items-center text-sm sm:mt-0 sm:ml-6">
						<LocationIcon />
						{job.location}
					</p>
				</div>
				<div class="mt-2 flex items-center text-sm sm:mt-0">
					<p>
						<time datetime="12/12/2022">{job.createdAt.toDateString()}</time>
					</p>
				</div>
			</div>
		</div>
	</a>
</div>
