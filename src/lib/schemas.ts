import { JobType, JobCompType, JobLocType } from '@prisma/client'
import { z } from 'zod'
import { zfd } from 'zod-form-data'
import { questionType } from './constants'

export const registerUserSchema = z
	.object({
		email: z
			.string({ required_error: 'Email is required.' })
			.email({ message: 'Email must be a valid email.' }),
		password: z
			.string({ required_error: 'Password is required' })
			.regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {
				message:
					'Password must be a minimum of 8 characters & contain at least one letter, one number, and one special character.',
			}),
		passwordConfirm: z
			.string({ required_error: 'Confirm Password is required' })
			.regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {
				message:
					'Password must be a minimum of 8 characters & contain at least one letter, one number, and one special character.',
			}),
	})
	.superRefine(({ passwordConfirm, password }, ctx) => {
		if (passwordConfirm !== password) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: 'Password & Confirm password must match.',
				path: ['password'],
			})
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: 'Password & Confirm password must match.',
				path: ['confirmPassword'],
			})
		}
	})

export const loginUserSchema = z.object({
	email: z
		.string({ required_error: 'Email is required.' })
		.email({ message: 'Email must be a valid email.' }),
	password: z.string({ required_error: 'Password is required' }),
})

export const updateProfileSchema = z.object({
	firstName: z
		.string()
		.max(64, { message: 'First name must be less than 64 characters' })
		.optional(),
	lastName: z
		.string()
		.max(64, { message: 'Last name must be less than 64 characters' })
		.optional(),
})

export const createOrganizationSchema = z.object({
	name: z
		.string({ required_error: 'Name is required' })
		.min(1, { message: 'Name is required' })
		.max(64, { message: 'Company name must be less than 64 characters' }),
	website: z
		.string({ required_error: 'Website is required' })
		.url({ message: 'Website must be a valid URL' }),
})

export const postJobSchema = zfd.formData({
	title: z
		.string({ required_error: 'Title is required' })
		.min(1, { message: 'Title is required' })
		.max(64, { message: 'Job Title must be less than 64 characters' }),
	jobType: z.nativeEnum(JobType),
	location: z.string({ required_error: 'Location is required' }),
	compType: z.nativeEnum(JobCompType),
	payScaleBegin: zfd.numeric(
		z.number({ required_error: 'Starting pay scale is required' }),
	),
	payScaleEnd: zfd.numeric(
		z.number({ required_error: 'Ending pay scale is required' }),
	),
	description: z.string({ required_error: 'A job description is required.' }),
	jobLocType: z.nativeEnum(JobLocType),
})

export const createResumeSchema = z.object({
	firstName: z
		.string()
		.max(64, { message: 'First name must be less than 64 characters' }),
	lastName: z
		.string()
		.max(64, { message: 'Last name must be less than 64 characters' }),
	location: z.string(),
})

export const createEducationSchema = zfd.formData({
	educationLevel: z
		.string({ required_error: 'Education level is required' })
		.min(1, { message: 'Education level is required' })
		.max(64, { message: 'Education level must be less than 64 characters' }),
	field: z.string(),
	school: z.string(),
	location: z.string(),
	currentlyEnrolled: zfd
		.checkbox()
		.transform((val) => Boolean(val))
		.optional(),
	enrolledFrom: z
		.string()
		.transform((val) => {
			if (val === '') {
				return null
			}
			return new Date(val)
		})
		.optional(),
	enrolledTo: z
		.string()
		.transform((val) => {
			if (val === '') {
				return null
			}
			return new Date(val)
		})
		.optional(),
})

export const createExperienceSchema = zfd.formData({
	jobTitle: z
		.string({ required_error: 'Education level is required' })
		.min(1, { message: 'Education level is required' })
		.max(64, { message: 'Education level must be less than 64 characters' }),
	company: z.string().optional(),
	location: z.string().optional(),
	currentlyEmployed: zfd
		.checkbox()
		.transform((val) => Boolean(val))
		.optional(),
	startDate: z
		.string()
		.transform((val) => {
			if (val === '') {
				return null
			}
			return new Date(val)
		})
		.optional(),
	endDate: z
		.string()
		.transform((val) => {
			if (val === '') {
				return null
			}
			return new Date(val)
		})
		.optional(),
	description: z.string().optional(),
})

export const createSkillSchema = z.object({
	name: z
		.string({ required_error: 'Name is required' })
		.min(1, { message: 'Name is required' })
		.max(64, {
			message: 'Skill name must be less than 65 characters',
		}),
})

export const answerOptionSchema = z.object({
	id: z
		.string({ required_error: 'Option ID is required' })
		.min(1, { message: 'Option ID is required' }),
	value: z
		.string({ required_error: 'Option value is required' })
		.min(1, { message: 'Option value is required' }),
})

export const multipleChoiceQuestionSchema = z.object({
	id: z.string({ required_error: 'Question ID is required' }),
	question: z.object({
		title: z.string({ required_error: 'Question title is required' }),
		options: z.array(answerOptionSchema),
	}),
	type: z.enum([questionType.MULTIPLE_CHOICE]),
})

export const customResponseQuestionSchema = z.object({
	id: z.string({ required_error: 'Question ID is required' }),
	question: z.object({
		title: z.string({ required_error: 'Question title is required' }),
	}),
	type: z.enum([questionType.SHORT_ANSWER]),
})

export const createApplicationQuestionsSchema = z.array(
	z.union([multipleChoiceQuestionSchema, customResponseQuestionSchema]),
)

export const customQuestionsSchema = z.array(
	z
		.object({
			id: z.string({ required_error: 'Question ID is required' }),
			question: z.union([
				multipleChoiceQuestionSchema,
				customResponseQuestionSchema,
			]),
			type: z.nativeEnum(questionType),
		})
		.optional(),
)

export const updateResumeDetailsSchema = z.object({
	summary: z.string({ required_error: 'Summary is required' }).max(1000, {
		message: 'Summary must be less than 1000 characters',
	}),
	firstName: z
		.string()
		.max(64, { message: 'First name must be less than 64 characters' }),
	lastName: z
		.string()
		.max(64, { message: 'Last name must be less than 64 characters' }),
	location: z.string(),
})
