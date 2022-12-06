<script lang="ts">
	import { Navbar } from '$lib/components'
	import Navigation from '$lib/components/navigation/Navigation.svelte'
	import { storeDrawer } from '$lib/stores/ui'
	import type { NavLink } from '$lib/types'
	import { AppBar, AppShell, Drawer } from '@skeletonlabs/skeleton'

	const sidebarNav: NavLink[] = [
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
		}
	]
	const topNav: NavLink[] = [
		{
			title: 'Candidate View',
			href: '/'
		}
	]

	const combinedNav = [...sidebarNav, ...topNav]

	function drawerOpen(): void {
		storeDrawer.set(true)
	}
</script>

<Drawer open={storeDrawer} position="left"><Navigation navItems={combinedNav} /></Drawer>
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
					<a href="/employers">
						<strong class="text-xl uppercase">Hire Nerds</strong>
					</a>
				</div>
			</svelte:fragment>

			<svelte:fragment slot="trail">
				{#each topNav as item}
					<a class="btn btn-sm" href={item.href}>{item.title}</a>
				{/each}
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<Navigation navItems={sidebarNav} />
	</svelte:fragment>
	<svelte:fragment slot="pageHeader" />
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter" />
	<svelte:fragment slot="footer" />
</AppShell>
