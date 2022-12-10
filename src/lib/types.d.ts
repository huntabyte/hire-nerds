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
	question: MultipleChoice | CustomResponse | undefined
	type: string
}

export interface MultipleChoice {
	title: string
	choices: string[]
}

export interface CustomResponse {
	title: string
}
