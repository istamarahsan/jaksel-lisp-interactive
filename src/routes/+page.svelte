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

	let rawInput = '';
	let input = '';
	let compileResult = {
		success: true,
		content: ''
	};
	let execResult = {
		success: true,
		value: ''
	};
	$: jakselCompileResultPromise = fetch('/compile', {
		method: 'POST',
		body: JSON.stringify({ src: input }),
		headers: {
			'Content-Type': 'application/json'
		}
	})
		.then((res) => res.json())
		.then((data) => {
			var parsed = z
				.union([
					z.object({ success: z.literal(true), content: z.string() }),
					z.object({ success: z.literal(false), error: z.string() })
				])
				.parse(data);
			compileResult = parsed;
			return parsed;
		});
	$: lispExecPromise = jakselCompileResultPromise
		.then((result) =>
			result.success
				? lips
						.exec(result.content)
						.then((value) => ({
							success: true,
							value
						}))
						.catch((error) => ({
							success: false,
							error: error
						}))
				: Promise.resolve({
						success: false,
						error: result.error
					})
		)
		.then((result) => {
			execResult = result;
			return result;
		});
	function setInput(str) {
		rawInput = str;
		input = str;
	}
	onMount(() => {
		setInput(init);
	});
</script>

<div id="page" class="mx-auto max-w-4xl p-10">
	<div class="flex flex-col items-center gap-5">
		<div class="flex flex-col gap-4 text-center">
			<h1 class="text-6xl">Jaksel LISP</h1>
			<h2 class="text-xl">Interactive Compiler</h2>
			<small class="text-md"
				><a href="https://github.com/Tx-ID/ct-antlr" target="_blank" class="underline"
					><strong>Jaksel LISP</strong></a
				>
				is a very simple lisp that compiles to Scheme. Powered by
				<a href="https://github.com/antlr/antlr4" target="_blank" class="underline">ANTLR</a> and
				<a href="https://github.com/jcubic/lips" target="_blank" class="underline">LIPS</a>.</small
			>
		</div>
		<div class="flex w-full items-center gap-4">
			<span>Examples: </span>
			<div class="flex flex-grow items-center gap-5">
				<button
					type="button"
					class="variant-filled btn btn-sm"
					on:click={() => setInput('jadi plis buka plis tambah 2 2 plis tutup')}>Addition</button
				>
				<button
					type="button"
					class="variant-filled btn btn-sm"
					on:click={() => setInput('jadi plis buka plis kurang 10 5 plis tutup')}
					>Subtraction</button
				>
				<button
					type="button"
					class="variant-filled btn btn-sm"
					on:click={() => setInput('jadi plis buka plis kali 6 6 plis tutup')}
					>Multiplication</button
				>
				<button
					type="button"
					class="variant-filled btn btn-sm"
					on:click={() => setInput('jadi plis buka plis bagi 10 5 plis tutup')}>Division</button
				>
				<button type="button" class="variant-filled btn btn-sm" on:click={() => setInput(init)}
					>Composite</button
				>
			</div>
		</div>
		<div class="flex h-[500px] w-full items-stretch justify-stretch">
			<div id="input" class="flex-grow">
				<textarea
					on:input={debounce((e) => {
						input = e.target.value;
					}, 300)}
					class="textarea h-full resize-none p-4"
					placeholder="jadi..."
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
					bind:value={rawInput}
				/>
			</div>
			<span class="divider-vertical mx-8 h-full border-2" />
			<div id="output" class="flex w-[250px] flex-col items-center">
				<div id="eval" class="flex flex-col items-center gap-2 p-1">
					<h2 class="text-2xl">Output:</h2>
					<div class="flex h-[100px] flex-grow items-center justify-center">
						{#if execResult.success}
							<span class="text-6xl">{execResult.value}</span>
						{:else}
							<span class="text-sm">{execResult.error}</span>
						{/if}
					</div>
				</div>
				<hr class="my-4 w-full !border-t-4" />
				<div id="lisp" class="flex w-full flex-grow flex-col items-center gap-5 p-1">
					<h2 class="text-2xl">Compiled LISP</h2>
					<CodeBlock
						class="h-full min-h-[128px] w-full flex-grow"
						language="scheme"
						code={compileResult.success ? compileResult.content : ' '}
					></CodeBlock>
				</div>
			</div>
		</div>
	</div>
</div>
