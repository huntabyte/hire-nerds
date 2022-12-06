<script lang="ts">
	import type { NavLink } from '$lib/types';

	export let navItems: NavLink[];

	import { storeDrawer } from '$lib/stores/ui';

	function drawerClose(): void {
		storeDrawer.set(false);
	}
</script>

<nav class="list-nav p-2 text-xs">
	<ul>
		{#each navItems as item}
			<li><a href={item.href} on:click={drawerClose}>{item.title}</a></li>
		{/each}
	</ul>
</nav>

<style>
	.list-nav a {
		border-radius: 6px;
		font-weight: 600;
	}
</style>
