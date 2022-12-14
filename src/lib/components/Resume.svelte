<script lang="ts">
	import type { Resume, ResumeEducation, ResumeExperience, ResumeSkills } from '@prisma/client'
	import { Divider } from '@skeletonlabs/skeleton'

	interface IResume extends Resume {
		experience: ResumeExperience[]
		education: ResumeEducation[]
		skills: ResumeSkills[]
	}

	export let resume: IResume
</script>

<div class="card p-4 max-w-4xl flex flex-col">
	<div class="card-heading px-4">
		<h2 class="text-2xl font-medium">Resume</h2>
		<Divider
			borderStyle="solid"
			borderWidth="border-t"
			margin="mt-2"
			borderColor="border-surface-50"
		/>
	</div>
	<div class="p-4 flex flex-col gap-8">
		<div class="flex justify-between w-full">
			<div>
				<h3>{resume.firstName} {resume.lastName}</h3>
				<p>{resume.location}</p>
				<p>{resume.firstName}@example.com</p>
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
			</div>
			<span class="py-3">
				<Divider borderWidth="border-t" borderStye="solid" borderColor="border-primary-500" />
			</span>
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
			</div>
			<span class="py-3">
				<Divider borderWidth="border-t" borderStye="solid" borderColor="border-primary-500" />
			</span>
			{#each resume.education as education}
				<div class="flex flex-col pb-6">
					<div class="flex justify-between">
						<h4 class="font-semibold">{education.educationLevel} - {education.field}</h4>
						<p>
							{education?.enrolledFrom ? education.enrolledFrom.getUTCFullYear() : 'Present'} - {education?.enrolledTo
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
				<h4 class="font-bold">Skills</h4>
			</div>
			<span class="py-3">
				<Divider borderWidth="border-t" borderStye="solid" borderColor="border-primary-500" />
			</span>

			<div class="flex gap-2">
				{#each resume.skills as skill}
					<span class="badge bg-surface-900">{skill.name}</span>
				{/each}
			</div>
		</div>
	</div>
</div>
