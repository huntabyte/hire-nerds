import type { z, ZodError } from 'zod';

export const validateData = async <T extends z.ZodTypeAny>(
	formData: FormData,
	schema: T,
	zfd: boolean = false,
): Promise<{
	formData: z.infer<T>;
	errors: z.inferFlattenedErrors<typeof schema> | null;
}> => {
	const body = Object.fromEntries(formData);

	if (zfd) {
		try {
			const data = schema.parse(formData);
			return {
				formData: data,
				errors: null,
			};
		} catch (err) {
			console.log('Error: ', err);
			const errors = (err as ZodError).flatten();
			return {
				formData,
				errors,
			};
		}
	} else {
		try {
			const data = schema.parse(body);
			return {
				formData: data,
				errors: null,
			};
		} catch (err) {
			console.log('Error: ', err);
			const errors = (err as ZodError).flatten();
			return {
				formData: body,
				errors,
			};
		}
	}
};
