<script lang="ts">
	import { Navbar } from '$lib/components';
	import type { Link } from '$lib/types';

	const navItems: Link[] = [
		{
			title: 'Home',
			href: '/employers'
		},
		{
			title: 'Job Postings',
			href: '/employers/jobs'
		},
		{
			title: 'Team',
			href: '/employers/team'
		},
		{
			title: 'Candidate View',
			href: '/'
		}
	];
</script>

<Navbar {navItems} />
<div class="p-4 w-full">
	<slot><!-- optional fallback --></slot>
</div>
