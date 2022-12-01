import { z } from 'zod';
import { zfd } from 'zod-form-data';

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
			});
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: 'Password & Confirm password must match.',
				path: ['confirmPassword'],
			});
		}
	});

export const loginUserSchema = z.object({
	email: z
		.string({ required_error: 'Email is required.' })
		.email({ message: 'Email must be a valid email.' }),
	password: z.string({ required_error: 'Password is required' }),
});

export const updateProfileSchema = z.object({
	firstName: z
		.string()
		.max(64, { message: 'First name must be less than 64 characters' })
		.optional(),
	lastName: z
		.string()
		.max(64, { message: 'Last name must be less than 64 characters' })
		.optional(),
});

export const createOrganizationSchema = z.object({
	name: z
		.string({ required_error: 'Name is required' })
		.min(1, { message: 'Name is required' })
		.max(64, { message: 'Company name must be less than 64 characters' }),
	website: z
		.string({ required_error: 'Website is required' })
		.url({ message: 'Website must be a valid URL' }),
});

export const postJobSchema = zfd.formData({
	title: z
		.string({ required_error: 'Title is required' })
		.min(1, { message: 'Title is required' })
		.max(64, { message: 'Job Title must be less than 64 characters' }),
	type: z.enum(['FULL_TIME', 'PART_TIME', 'CONTRACT']),
	location: z.string({ required_error: 'Location is required' }),
	compType: z.enum(['SALARY', 'HOURLY']),
	payScaleBegin: zfd.numeric(
		z.number({ required_error: 'Starting pay scale is required' }),
	),
	payScaleEnd: zfd.numeric(
		z.number({ required_error: 'Ending pay scale is required' }),
	),
	description: z.string({ required_error: 'A job description is required.' }),
	jobLocType: z.enum(['REMOTE', 'HYBRID', 'OFFICE']),
});
