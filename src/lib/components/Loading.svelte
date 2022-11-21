<script>
	import LoadingIcon from '$lib/icons/LoadingIcon.svelte'
</script>

<div
	class="blu fixed top-0 left-0 right-0 bottom-0 z-50 flex h-screen w-full flex-col items-center justify-center gap-2 overflow-hidden bg-white/30 opacity-75 backdrop-blur-md"
>
	<div class="flex w-full flex-col items-center gap-2">
		<LoadingIcon />
		<h2 class="text-center text-xl font-semibold text-white">Loading...</h2>
		<p class="w-1/3 text-center text-white">This may take a few seconds...</p>
	</div>
</div>
