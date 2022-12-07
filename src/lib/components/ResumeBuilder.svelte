<script lang="ts">
	import type { Resume, ResumeEducation, ResumeExperience, ResumeSkills } from '@prisma/client'
	import { Divider } from '@skeletonlabs/skeleton'
	import { ExperienceForm } from '$lib/components'

	interface IResume extends Resume {
		experience: ResumeExperience[]
		education: ResumeEducation[]
		skills: ResumeSkills[]
	}

	export let resume: IResume
	let showExperienceForm = false

	const toggleExperienceForm = () => {
		showExperienceForm = !showExperienceForm
	}
</script>

<div class="card card-body max-w-4xl mx-auto flex flex-col gap-8">
	<div class="flex justify-between w-full">
		<div>
			<h3>Hunter Johnston</h3>
			<p>Tampa, FL</p>
			<p>hunter@example.com</p>
		</div>
		<div>
			<button class="btn btn-sm btn-filled-primary">Edit</button>
		</div>
	</div>
	<p class="-mt-5">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nesciunt quos illo facilis
		quam aspernatur aliquid sunt facere commodi excepturi voluptatum, adipisci sit vel, provident
		mollitia ipsa ipsam vero fuga.
	</p>
	<div class="flex flex-col w-full">
		<div class="flex justify-between items-center">
			<h4 class="font-medium">Experience</h4>
			<button class="btn btn-sm btn-filled-primary" on:click={toggleExperienceForm}>Add</button>
		</div>
		<span class="py-3">
			<Divider borderWidth="border-t" borderStye="solid" borderColor="border-primary-500" />
		</span>
		{#if showExperienceForm}
			<ExperienceForm bind:showExperienceForm />
		{/if}
		{#each resume.experience as experience}
			<div class="flex flex-col pb-6">
				<div class="flex justify-between items-center">
					<h4 class="font-semibold">{experience.jobTitle}</h4>
					<p>
						{experience.startDate?.getUTCFullYear()} - {experience.endDate?.getUTCFullYear()}
					</p>
				</div>
				<p>
					<em>
						{experience.company}
					</em>
				</p>
				<p class="pt-2">
					<span class="opacity-90">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, illo asperiores ut
						rerum reprehenderit natus deserunt commodi repellat praesentium ad quam voluptatum
						itaque molestiae, quo vero similique aliquam. Quos, sunt.
					</span>
				</p>
			</div>
		{/each}
	</div>
	<div class="flex flex-col w-full">
		<div class="flex justify-between items-center">
			<h4 class="font-bold">Education</h4>
			<button class="btn btn-sm btn-filled-primary">Add</button>
		</div>
		<span class="py-3">
			<Divider borderWidth="border-t" borderStye="solid" borderColor="border-primary-500" />
		</span>
		{#each resume.education as education}
			<div class="flex flex-col gap-2">
				<div class="flex justify-between">
					<h5>{education.educationLevel}</h5>
					<p>
						{education.enrolledFrom.getUTCFullYear()} - {education.enrolledTo.getUTCFullYear()}
					</p>
				</div>
				<p>{education.school}, {education.location}</p>
			</div>
		{/each}
	</div>
	<div class="flex flex-col w-full">
		<div class="flex justify-between items-center">
			<h4 class="font-bold">Skills</h4>
			<button class="btn btn-sm btn-filled-primary">Add</button>
		</div>
		<span class="py-3">
			<Divider borderWidth="border-t" borderStye="solid" borderColor="border-primary-500" />
		</span>

		{#each resume.skills as skill}
			<div class="flex">
				<span class="badge bg-accent-500">{skill.name}</span>
			</div>
		{/each}
	</div>
</div>