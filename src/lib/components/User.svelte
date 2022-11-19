<script>
	export let user

	import { USER_CARD_SIZE } from '$lib/utils/constants'
	import { activeUser } from '$lib/store'

	const onUserClick = () => {
		$activeUser = user
	}
</script>

<button
	on:click={onUserClick}
	class="absolute flex cursor-pointer flex-col rounded-lg border border-gray-200 bg-black shadow-lg transition hover:scale-105 hover:bg-gray-50 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1 z-10"
	class:opacity-50={$activeUser?.id && $activeUser?.id !== user.id}
	style="left: {user.x}px;
    top: {user.y}px;
		width: {USER_CARD_SIZE.width}px;
		height: {USER_CARD_SIZE.height}px;
		"
>
	<div class="relative h-full overflow-hidden rounded-lg">
		<h1 class="absolute w-full bg-gray-900/70 text-center text-white">{user.name}</h1>
		<p class="absolute bottom-6 w-full bg-gray-900/70 text-center text-white">
			{user.location}
		</p>
		<h2 class="absolute bottom-0 w-full bg-gray-900/70 text-center text-white">
			{new Date(user.birthDate).toLocaleDateString()}
		</h2>

		<img src={user.avatar} alt={user.name} class="h-full w-full" />
	</div>
</button>
