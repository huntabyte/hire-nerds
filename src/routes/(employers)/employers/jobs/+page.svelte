<script lang="ts">
	import { DataTable } from '$lib/components';
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ jobs } = data);
</script>

<div class="p-4">
	<h1 class="text-white text-3xl font-semibold ">Job Postings</h1>
	<div class="divider w-1/2 self-center" />
	<DataTable sourceData={jobs} />
</div>
