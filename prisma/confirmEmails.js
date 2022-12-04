import * as dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
import { orgUserIds, candidateUserIds } from './seed.js';

dotenv.config();

const supabase = createClient(
	process.env.PUBLIC_SUPABASE_URL,
	process.env.SUPABASE_SERVICE_KEY,
);

const {
	data: { users },
	error,
} = await supabase.auth.admin.listUsers();

const userIds = users.map((user) => user.id);

for (let id of userIds) {
	const { data: confirmEmails, error: confirmEmailsError } =
		await supabase.auth.admin.updateUserById(id, { email_confirm: true });
}
