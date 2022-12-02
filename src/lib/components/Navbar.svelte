<script lang="ts">
	import { page } from '$app/stores';
	const navItems = [
		{
			name: 'Home',
			href: '/'
		},
		{
			name: 'Profile',
			href: '/my/profile'
		},
		{
			name: 'Jobs',
			href: '/jobs'
		},
		{
			name: 'Employers',
			href: '/employers'
		}
	];
</script>

<div class="flex w-full justify-between items-center p-4">
	<div>
		<ul class="flex items-center space-x-2 text-white">
			{#each navItems as navItem}
				<li>
					<a href={navItem.href} class="btn btn-ghost">{navItem.name}</a>
				</li>
			{/each}
		</ul>
	</div>
	<div class="space-x-2">
		{#if $page.data.session}
			<form action="/logout" method="POST">
				<button type="submit" class="btn btn-primary">Logout</button>
			</form>
		{:else}
			<a href="/login" class="btn btn-primary">Login</a>
			<a href="/register" class="btn btn-primary">Register</a>
		{/if}
	</div>
</div>
