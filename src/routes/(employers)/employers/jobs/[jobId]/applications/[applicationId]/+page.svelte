<script lang="ts">
	import type { PageData } from './$types'
	import { Resume, ApplicationAnswers } from '$lib/components'

	export let data: PageData
</script>

<div class="flex gap-6">
	<Resume resume={data.application.resume} />
	<ApplicationAnswers job={data.job} application={data.application} />
</div>
