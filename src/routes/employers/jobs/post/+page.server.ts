import { postJobSchema } from '$lib/schemas';
import { validateData } from '$lib/utils';
import { invalid } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	postJob: async ({ request, locals }) => {
		const { formData, errors } = await validateData(
			await request.formData(),
			postJobSchema,
			true,
		);

		if (errors) {
			return invalid(400, {
				data: formData,
				errors: errors.fieldErrors,
			});
		}
	},
};
