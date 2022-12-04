<script lang="ts">
	import type { Job } from '@prisma/client';

	export let job: Job;
</script>

<div class="flex flex-col items-center justify-center">
	<div class="flex flex-col items-center justify-center">
		<h1 class="text-2xl font-bold">{job.title}</h1>
		<p class="text-xl">{job.description}</p>
	</div>
</div>
