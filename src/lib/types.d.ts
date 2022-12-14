import type { Job, JobApplication, Prisma } from '@prisma/client'

export interface NavLink {
	href: string
	title: string
}

export interface IInput
	extends Partial<svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['input']>> {
	label: string
}

export interface IJob extends Job {
	applications: JobApplication[]
}

export interface IQuestion {
	id: string
	question: Question
	type: string
}

export type Question =
	| { id: string; type: 'MULTIPLE_CHOICE'; question: MultipleChoice }
	| { id: string; type: 'CUSTOM_RESPONSE'; question: CustomResponse }

type MultipleChoice = {
	title: string
	options: AnswerOption[]
}

type CustomResponse = {
	title: string
}

type AnswerOption = {
	id: string
	value: string
}

const jobApplicationWithResume = Prisma.validator<Prisma.JobApplicationArgs>()({
	include: { resume: true },
})

export type JobApplicationWithResume = Prisma.JobApplicationGetPayload<
	typeof jobApplicationWithResume
>

const jobsWithCount = Prisma.validator<Prisma.JobFindManyArgs>()({
	include: { _count: { select: { applications: true } } },
})

export type JobsWithCount = Prisma.JobGetPayload<typeof jobsWithCount>
