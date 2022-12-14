<script lang="ts">
	import type { Resume, ResumeEducation, ResumeExperience, ResumeSkills } from '@prisma/client'
	import { Divider } from '@skeletonlabs/skeleton'
	import { ExperienceForm, EducationForm, Input, Textarea } from '$lib/components'

	interface IResume extends Resume {
		experience: ResumeExperience[]
		education: ResumeEducation[]
		skills: ResumeSkills[]
	}

	export let resume: IResume
	let showExperienceForm = false
	let showEducationForm = false
	let showSkillForm = false

	const toggleExperienceForm = () => {
		showExperienceForm = !showExperienceForm
	}
</script>

<div class="card card-glass p-4 max-w-4xl mx-auto flex flex-col gap-8">
	<form action="?/updateResumeDetails" method="POST" class="flex flex-col">
		<div class="flex justify-between">
			<div class="flex flex-col">
				<div class="flex gap-2">
					<Input type="text" value={resume.firstName} label="First Name" id="firstName" />
					<Input type="text" value={resume.lastName} label="Last Name" id="lastName" />
				</div>
				<Input type="text" value={resume.location} label="Location" id="location" />
			</div>
			<div>
				<button type="button" class="btn btn-sm btn-filled-primary">Edit</button>
			</div>
		</div>
		<Textarea class="w-full h-32 resize-none" id="summary" label="Summary" value={resume.summary} />
		<span class="pt-2 self-end">
			<button type="submit" class="btn btn-sm btn-ghost-primary">Update</button>
		</span>
	</form>
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
						{experience.startDate?.getUTCFullYear()} - {experience.endDate?.getUTCFullYear() ??
							'Present'}
					</p>
				</div>
				<p>
					<em>
						{experience.company}
					</em>
				</p>
				<p class="pt-2">
					<span class="opacity-90">
						{experience.description}
					</span>
				</p>
			</div>
		{/each}
	</div>
	<div class="flex flex-col w-full">
		<div class="flex justify-between items-center">
			<h4 class="font-medium">Education</h4>
			<button class="btn btn-sm btn-filled-primary" on:click={() => (showEducationForm = true)}
				>Add</button
			>
		</div>
		<span class="py-3">
			<Divider borderWidth="border-t" borderStye="solid" borderColor="border-primary-500" />
		</span>
		{#if showEducationForm}
			<EducationForm bind:showEducationForm />
		{/if}
		{#each resume.education as education}
			<div class="flex flex-col pb-6">
				<div class="flex justify-between">
					<h4 class="font-semibold">{education.educationLevel} - {education.field}</h4>
					<p>
						{education.enrolledFrom?.getUTCFullYear()} - {education?.enrolledTo
							? education.enrolledTo.getUTCFullYear()
							: 'Present'}
					</p>
				</div>
				<p>
					<em>
						{education.school}, {education.location}
					</em>
				</p>
			</div>
		{/each}
	</div>
	<div class="flex flex-col w-full">
		<div class="flex justify-between items-center">
			<h4 class="font-medium">Skills</h4>
			<button class="btn btn-sm btn-filled-primary" on:click={() => (showSkillForm = true)}
				>Add</button
			>
		</div>
		<span class="py-3">
			<Divider borderWidth="border-t" borderStye="solid" borderColor="border-primary-500" />
		</span>
		{#if showSkillForm}
			<form action="?/createSkill" method="POST">
				<Input type="text" label="Skill" id="skill" />
				<button type="submit" class="btn btn-sm btn-filled-primary">Add</button>
				<button
					type="button"
					class="btn btn-sm btn-ghost-warning"
					on:click={() => (showSkillForm = false)}>Cancel</button
				>
			</form>
		{/if}

		{#each resume.skills as skill}
			<div class="flex">
				<span class="badge bg-accent-500">{skill.name}</span>
			</div>
		{/each}
	</div>
</div>
