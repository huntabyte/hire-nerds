<script lang="ts">
	import { page } from '$app/stores'
	import type { Link } from '$lib/types'

	export let navItems: Link[]
</script>

<div class="flex w-full justify-between items-center p-4">
	<div>
		<ul class="flex items-center space-x-2 text-white">
			{#each navItems as navItem}
				<li>
					<a href={navItem.href} class="btn btn-ghost">{navItem.title}</a>
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
