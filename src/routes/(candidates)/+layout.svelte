<script lang="ts">
	import { storeDrawer } from '$lib/stores/ui'
	import { AppBar, AppShell, Drawer } from '@skeletonlabs/skeleton'
	import type { NavLink } from '$lib/types'

	import { Navigation } from '$lib/components'
	const navItems: NavLink[] = [
		{
			title: 'Home',
			href: '/'
		},
		{
			title: 'Profile',
			href: '/my/profile'
		},
		{
			title: 'Applications',
			href: '/my/applications'
		},
		{
			title: 'Jobs',
			href: '/jobs'
		},
		{
			title: 'Employer View',
			href: '/employers'
		}
	]

	function drawerOpen(): void {
		storeDrawer.set(true)
	}
</script>

<Drawer open={storeDrawer} position="left"><Navigation {navItems} /></Drawer>
<AppShell slotSidebarLeft="bg-surface-500/5 w-0 lg:w-36">
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<div class="flex items-center">
					<button class="lg:hidden btn btn-sm mr-4" on:click={drawerOpen}>
						<span>
							<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
								<rect width="100" height="20" />
								<rect y="30" width="100" height="20" />
								<rect y="60" width="100" height="20" />
							</svg>
						</span>
					</button>
					<a href="/">
						<strong class="text-xl uppercase">Hire Nerds</strong>
					</a>
				</div>
			</svelte:fragment>

			<svelte:fragment slot="trail">
				{#each navItems as item}
					<a class="btn btn-sm" href={item.href}>{item.title}</a>
				{/each}
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="pageHeader" />
	<slot />
	<svelte:fragment slot="pageFooter" />
	<svelte:fragment slot="footer" />
</AppShell>
