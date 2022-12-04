<script lang="ts">
	import { EmployerJobTable } from '$lib/components';
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ jobs } = data);
</script>

<div class="flex flex-col items-center w-full">
	<h1 class="text-white text-3xl font-semibold ">Jobs</h1>
	<div class="divider w-1/2 self-center" />
	<EmployerJobTable {jobs} />

	<!-- {#each jobs as job}
		<EmployerJob {job} />
	{/each} -->
</div>
