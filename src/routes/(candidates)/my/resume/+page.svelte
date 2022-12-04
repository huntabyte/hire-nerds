<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ resume } = data);
</script>

<div class="flex flex-col w-full h-full p-2">
	<div class="w-full flex justify-evenly">
		<div>
			<h1 class="text-white text-2xl font-bold">Info</h1>
			<p class="font-medium">
				First Name: <span class="font-normal">
					{resume?.firstName}
				</span>
			</p>
			<p class="font-medium">
				Last Name: <span class="font-normal">
					{resume?.lastName}
				</span>
			</p>
			<p class="font-medium">
				Location: <span class="font-normal">
					{resume?.location}
				</span>
			</p>
		</div>
		<div>
			<h1 class="text-white text-2xl font-bold">Education</h1>
			{#if resume?.education}
				{#each resume.education as education}
					<p class="font-medium">
						Level: <span class="font-normal">
							{education.educationLevel}
						</span>
					</p>
					<p class="font-medium">
						Field of Study: <span class="font-normal">
							{education.field}
						</span>
					</p>
					<p class="font-medium">
						School: <span class="font-normal">
							{education.school}
						</span>
					</p>
					<p class="font-medium">
						Currently Enrolled?: <span class="font-normal">
							{education.currentlyEnrolled}
						</span>
					</p>
					<p class="font-medium">
						From: <span class="font-normal">
							{education.enrolledFrom?.toLocaleDateString()}
						</span>
					</p>
					<p class="font-medium">
						To: <span class="font-normal">
							{education.enrolledTo?.toLocaleDateString()}
						</span>
					</p>
				{/each}
			{/if}
		</div>
		<div>
			<h1 class="text-white text-2xl font-bold">Experience</h1>
			{#if resume?.experience}
				{#each resume.experience as experience}
					<p class="font-medium">
						Job Title: <span class="font-normal">
							{experience.jobTitle}
						</span>
					</p>
					<p class="font-medium">
						Company: <span class="font-normal">
							{experience.company}
						</span>
					</p>
					<p class="font-medium">
						Current Employed: <span class="font-normal">
							{experience.currentlyEmployed}
						</span>
					</p>
					<p class="font-medium">
						From: <span class="font-normal">
							{experience.employedFrom?.toLocaleDateString()}
						</span>
					</p>
					<p class="font-medium">
						To: <span class="font-normal">
							{experience.employedTo?.toLocaleDateString()}
						</span>
					</p>
				{/each}
			{/if}
		</div>
		<div>
			<h1 class="text-white text-2xl font-bold">Skills</h1>
			{#if resume?.skills}
				{#each resume.skills as skill}
					<p class="font-medium">
						{skill.name}
					</p>
				{/each}
			{/if}
		</div>
	</div>
</div>
