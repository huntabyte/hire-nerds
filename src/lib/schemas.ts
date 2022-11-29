import { z } from 'zod';

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
