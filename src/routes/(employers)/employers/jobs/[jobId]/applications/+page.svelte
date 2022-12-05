<script lang="ts">
	import type { PageData } from './$types';
	import { DataTable } from '$lib/components';

	export let data: PageData;

	$: ({ applications } = data);
</script>

<div class="p-4">
	<DataTable sourceData={applications} />
</div>
