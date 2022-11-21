<script>
	import DropdownMenu from '$lib/components/DropdownMenu.svelte'
</script>

<DropdownMenu>
	<span slot="trigger">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" class="w-8 h-8">
			<path
				fill-rule="evenodd"
				d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
				clip-rule="evenodd"
			/>
		</svg>
	</span>
	<div slot="content" class="min-w-[10rem]">
		<div class="grid grid-cols-3 max-w-fit rounded-md p-4 justify-center items-center gap-4">
			<p class="col-span-2 text-white">Father</p>
			<img
				src="/father.png"
				alt="Father"
				class="w-8 h-8 rounded-full ring-1 ring-offset-1 ring-yellow-400"
			/>

			<p class="col-span-2 text-white">Mother</p>
			<img
				src="/mother.png"
				alt="Mother"
				class="w-8 h-8 rounded-full ring-1 ring-offset-1 ring-yellow-400"
			/>

			<p class="col-span-2 text-white">Child</p>
			<img
				src="/child.png"
				alt="Child"
				class="w-8 h-8 rounded-full ring-1 ring-offset-1 ring-yellow-400"
			/>

			<p class="col-span-2 text-white">Partner</p>
			<img
				src="/partner.png"
				alt="Partner"
				class="w-8 h-8 rounded-full ring-1 ring-offset-1 ring-yellow-400"
			/>

			<p class="col-span-2 text-white">Brother</p>
			<img
				src="/brother.png"
				alt="Brother"
				class="w-8 h-8 rounded-full ring-1 ring-offset-1 ring-yellow-400"
			/>

			<p class="col-span-2 text-white">Sister</p>
			<img
				src="/sister.png"
				alt="Sister"
				class="w-8 h-8 rounded-full ring-1 ring-offset-1 ring-yellow-400"
			/>
		</div>
	</div>
</DropdownMenu>
