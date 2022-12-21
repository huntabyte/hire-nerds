<script lang="ts">
	import { storeDrawer } from '$lib/stores/ui'
	import { AppBar, AppShell, Avatar, Drawer, menu } from '@skeletonlabs/skeleton'
	import type { NavLink } from '$lib/types'
	import { Navigation, Job, Header } from '$lib/components'
	import type { PageData } from './$types'
	export let data: PageData

	const navItems: NavLink[] = [
		{
			title: 'Home',
			href: '/'
		},

		{
			title: 'Jobs',
			href: '/jobs'
		}
	]

	const userMenu: NavLink[] = [
		{
			title: 'Profile',
			href: '/my/profile'
		},
		{
			title: 'Resume',
			href: '/my/resume'
		},
		{
			title: 'Applications',
			href: '/my/applications'
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
<AppShell slotSidebarLeft="w-1/3 ">
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<div class="flex items-center">
					<button class="md:hidden btn btn-sm mr-4" on:click={drawerOpen}>
						<span>
							<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
								<rect width="100" height="20" />
								<rect y="30" width="100" height="20" />
								<rect y="60" width="100" height="20" />
							</svg>
						</span>
					</button>
					<a href="/">
						<span class="text-xl font-medium uppercase">Hire Nerds</span>
					</a>
				</div>
			</svelte:fragment>

			<svelte:fragment slot="trail">
				{#if data.session}
					{#each navItems as item}
						<a class="btn btn-sm" href={item.href}>{item.title}</a>
					{/each}
				{:else}
					<a href="/login" class="btn btn-filled-primary">Login</a>
					<a href="/register" class="btn btn-ghost-primary">Register</a>
				{/if}
				{#if data.session}
					<span class="relative">
						<button use:menu={{ menu: 'navigation' }}
							><Avatar
								initials="HJ"
								border="border-2 border-surface-300-600-token hover:!border-primary-500 cursor-pointer"
							/></button
						>
						<nav class="list-nav card p-4 w-48 shadow-xl" data-menu="navigation">
							<ul>
								{#each userMenu as item}
									<li>
										<a href={item.href}>{item.title}</a>
									</li>
								{/each}

								<li>
									<form action="/logout" method="POST">
										<button type="submit" class="option w-full">Sign Out</button>
									</form>
								</li>
							</ul>
						</nav>
					</span>
				{/if}
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<Header />
	<div class="flex justify-center mx-auto w-full max-w-7xl">
		<div class="flex flex-col p-6 gap-6">
			{#each data.jobs as job}
				<Job {job} />
			{/each}
		</div>
		<div class="max-w-7xl lg:py-6 flex-1 min-h-full">
			<div class="card card-glass w-full p-4">
				<slot />
			</div>
		</div>
	</div>
	<svelte:fragment slot="pageFooter" />
	<svelte:fragment slot="footer" />
</AppShell>
