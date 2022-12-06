<script lang="ts">
	import CandidatesDataTable from '$lib/components/CandidatesDataTable.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ jobs } = data);
</script>

<pre>
    {JSON.stringify(jobs, null, 2)}
</pre>
