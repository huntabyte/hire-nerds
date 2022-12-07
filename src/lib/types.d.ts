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
