<script>
	const init = `jadi 
	plis buka 
		plis tambah 
		plis buka 
			plis kurang 70 69 
		plis tutup 
		1337 
	plis tutup
	`;

	import hljs from 'highlight.js/lib/core';
	import scheme from 'highlight.js/lib/languages/scheme';
	import 'highlight.js/styles/monokai.min.css';
	import { CodeBlock, storeHighlightJs } from '@skeletonlabs/skeleton';
	import lips from '@jcubic/lips';
	import { z } from 'zod';
	import debounce from 'lodash/debounce';
	import { onMount } from 'svelte';

	hljs.registerLanguage('scheme', scheme);
	storeHighlightJs.set(hljs);

	let input = '';
	$: jakselCompileResultPromise = fetch('/compile', {
		method: 'POST',
		body: JSON.stringify({ src: input }),
		headers: {
			'Content-Type': 'application/json'
		}
	})
		.then((res) => res.json())
		.then((data) =>
			z
				.union([
					z.object({ success: z.literal(true), content: z.string() }),
					z.object({ success: z.literal(false), error: z.string() })
				])
				.parse(data)
		);
	$: lispExecPromise = jakselCompileResultPromise.then((result) =>
		result.success ? lips.exec(result.content) : Promise.resolve('')
	);
	onMount(() => {
		input = init;
	});
</script>

<div id="page" class="mx-auto max-w-4xl p-10">
	<div class="flex flex-col items-center gap-10">
		<div class="flex flex-col gap-4 text-center">
			<h1 class="text-6xl">Jaksel LISP</h1>
			<small class="text-xl">Interactive Compiler</small>
		</div>
		<div class="flex h-[500px] w-full items-stretch justify-stretch">
			<div id="input" class="flex-grow">
				<textarea
					on:input={debounce((e) => {
						input = e.target.value;
					}, 300)}
					class="textarea h-full resize-none p-4"
					placeholder="jadi gini..."
					on:keydown={(e) => {
						if (e.key !== 'Tab') {
							return;
						}
						e.preventDefault();
						const start = e.target.selectionStart;
						const end = e.target.selectionEnd;
						const text = e.target.value;
						e.target.value = text.substring(0, start) + '\t' + text.substring(end);
						e.target.selectionStart = e.target.selectionEnd = start + 1;
					}}
					value={init}
				/>
			</div>
			<span class="divider-vertical mx-8 h-full border-2" />
			<div id="output" class="flex w-[250px] flex-col items-center">
				<div id="eval" class="flex flex-col items-center gap-2 p-1">
					<h2 class="text-2xl">Output:</h2>
					<div class="flex h-[100px] flex-grow items-center justify-center">
						{#await jakselCompileResultPromise}
							<span class="text-6xl">...</span>
						{:then jakselCompileResult}
							{#if jakselCompileResult.success}
								{#await lispExecPromise}
									<span class="text-6xl">...</span>
								{:then result}
									<span class="text-6xl">{result}</span>
								{:catch err}
									<span class="text-sm">{err.message ? err.message : err}</span>
								{/await}
							{:else}
								<span class="text-sm">{jakselCompileResult.error}</span>
							{/if}
						{/await}
					</div>
				</div>
				<hr class="my-4 w-full !border-t-4" />
				<div id="lisp" class="flex w-full flex-grow flex-col items-center gap-5 p-1">
					<h2 class="text-2xl">Compiled LISP</h2>
					{#await jakselCompileResultPromise then jakselCompileResult}
						<CodeBlock
							class="h-full min-h-[128px] w-full flex-grow"
							language="scheme"
							code={jakselCompileResult.success ? jakselCompileResult.content : ''}
						></CodeBlock>
					{/await}
				</div>
			</div>
		</div>
	</div>
</div>
