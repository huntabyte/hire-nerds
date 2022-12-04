<script lang="ts">
	import { Navbar } from '$lib/components';
	import type { Link } from '$lib/types';
	const navItems: Link[] = [
		{
			title: 'Home',
			href: '/'
		},
		{
			title: 'Profile',
			href: '/my/profile'
		},
		{
			title: 'Jobs',
			href: '/jobs'
		},
		{
			title: 'Employer View',
			href: '/employers'
		}
	];
</script>

<Navbar {navItems} />
<div class="p-4 w-full">
	<slot><!-- optional fallback --></slot>
</div>
