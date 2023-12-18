import { json } from '@sveltejs/kit';
import compile from '$lib/server/jakselLisp/jaksel.js';
import { z } from 'zod';

export const POST = async ({ request }) => {
	const data = await request.json();
	const parsed = z.object({ src: z.string() }).safeParse(data);
	if (!parsed.success) {
		return new Response('', {
			status: 400
		});
	}
	const { src } = parsed.data;
	const compileResult = compile(src);
	return json(compileResult, { status: 200 });
};
