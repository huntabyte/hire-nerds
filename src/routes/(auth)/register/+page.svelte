<script lang="ts">
	import { Input } from '$lib/components'
</script>

<div class="flex min-h-full">
	<div
		class="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24"
	>
		<div class="mx-auto w-full max-w-sm lg:w-96">
			<div>
				<h1 class="text-3xl font-bold text-center">Register for an account</h1>
			</div>
			<form action="?/register" method="POST" class="flex flex-col space-y-2 w-full pt-6">
				<Input id="email" type="email" label="Email" />
				<Input id="password" type="password" label="Password" />
				<Input id="passwordConfirm" type="password" label="Confirm Password" />
				<div class="w-full pt-3">
					<button type="submit" class="btn btn-filled-primary w-full"> Register </button>
					<p class="pt-4 text-center">
						<span class="text-primary-50/80">
							Or <a href="/login">Login</a> if you already have an account.
						</span>
					</p>
				</div>
			</form>
		</div>
	</div>
	<div class="relative hidden w-0 flex-1 lg:block">
		<img
			class="absolute inset-0 h-full w-full object-cover"
			src="https://images.unsplash.com/photo-1639485528237-f9831b865dbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
			alt=""
		/>
	</div>
</div>
