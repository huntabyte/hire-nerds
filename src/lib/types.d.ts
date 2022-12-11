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
