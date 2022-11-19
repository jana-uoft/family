<script>
	export let color = 'red'
</script>

<div class="absolute -top-2 -right-2 flex z-20">
	<span class="absolute inline-flex">
		<span
			class="inline-flex h-4 w-4 rounded-full"
			class:bg-red-400={color === 'red'}
			class:bg-green-400={color === 'green'}
			class:bg-blue-400={color === 'blue'}
			class:bg-yellow-400={color === 'yellow'}
		/>
	</span>
	<span
		class="relative inline-flex h-4 w-4 rounded-full"
		class:bg-red-500={color === 'red'}
		class:bg-orange-500={color === 'orange'}
	/>
</div>
