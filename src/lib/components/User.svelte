<script>
	export let user

	import ActiveIndicator from '$lib/components/ActiveIndicator.svelte'

	import { USER_CARD_SIZE } from '$lib/utils/constants'
	import { activeUser, users } from '$lib/store'

	const style = `
		left: ${user.x}px;
    top: ${user.y}px;
		width: ${USER_CARD_SIZE.width}px;
		height: ${USER_CARD_SIZE.height}px;
	`

	const onUserClick = () => {
		if ($activeUser?.id !== user.id) {
			$activeUser = user
			// clear all related users
			$users = $users.map((u) => {
				delete u['related-partner']
				delete u['related-parent']
				delete u['related-child']
				delete u['related-sibling']
				return u
			})
			// identify the immediate relations of the active user
			// and set property 'related-xx' to true: related-partner, related-parent, related-child, related-sibling
			// this will be used to show the related users
			$users = $users.map((u) => {
				if (u.children.includes(user.id)) {
					u['related-parent'] = true
				}
				if (u.parents.includes(user.id)) {
					u['related-child'] = true
				}
				if (u.siblings.includes(user.id)) {
					u['related-sibling'] = true
				}
				if (u.partner === user.id) {
					u['related-partner'] = true
				}
				return u
			})
		}
	}

	$: isRelated =
		user['related-partner'] ||
		user['related-parent'] ||
		user['related-child'] ||
		user['related-sibling']

	$: color = user['related-parent']
		? 'red'
		: user['related-child']
		? 'green'
		: user['related-sibling']
		? 'blue'
		: user['related-partner']
		? 'yellow'
		: 'white'
</script>

<button
	on:click={onUserClick}
	class="absolute flex cursor-pointer flex-col rounded-lg border border-gray-200 bg-black shadow-lg transition hover:scale-105 hover:bg-gray-50 focus:scale-110 focus:outline-none focus:ring-2 focus:ring-indigo-500 ring-offset-1 "
	class:opacity-30={$activeUser?.id && $activeUser?.id !== user.id}
	class:scale-90={$activeUser?.id && $activeUser?.id !== user.id}
	class:opacity-100={isRelated}
	class:ring-2={isRelated}
	class:ring-red-500={user['related-parent']}
	class:ring-green-500={user['related-child']}
	class:ring-blue-500={user['related-sibling']}
	class:ring-yellow-500={user['related-partner']}
	{style}
>
	{#if isRelated}
		<ActiveIndicator {color} />
	{/if}

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
