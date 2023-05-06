import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ locals }) => {
	console.log(await locals.logto.isAuthenticated());
	return json({ message: 'pong', user: locals.user?.name ?? null });
};
