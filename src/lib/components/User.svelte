<script>
	export let user

	import RelationIndicator from '$lib/components/RelationIndicator.svelte'
	import ActiveIndicator from '$lib/components/ActiveIndicator.svelte'

	import { USER_CARD_SIZE } from '$lib/utils/constants'
	import { activeUser, users } from '$lib/store'

	const style = `
		left: ${user.x}px;
    top: ${user.y}px;
		width: ${USER_CARD_SIZE.width}px;
		height: ${USER_CARD_SIZE.height}px;
	`

	const onUserClick = async () => {
		if ($activeUser?.id !== user.id) {
			$activeUser = user

			// clear all related users
			$users = $users.map((u) => {
				delete u['related-partner']
				delete u['related-father']
				delete u['related-mother']
				delete u['related-child']
				delete u['related-brother']
				delete u['related-sister']
				return u
			})
			// identify the immediate relations of the active user
			// and set property 'related-xx' to true
			// this will be used to show the RelationIndicator
			$users = $users.map((u) => {
				if (user.children?.includes(u.id)) {
					u['related-child'] = true
				}
				if (user.father === u.id) {
					u['related-father'] = true
				}
				if (user.mother === u.id) {
					u['related-mother'] = true
				}
				if (user.brothers?.includes(u.id)) {
					u['related-brother'] = true
				}
				if (user.sisters?.includes(u.id)) {
					u['related-sister'] = true
				}
				if (user.partner === u.id) {
					u['related-partner'] = true
				}
				return u
			})
		}
	}

	$: isActive = $activeUser?.id === user.id

	$: isRelated =
		user['related-partner'] ||
		user['related-father'] ||
		user['related-mother'] ||
		user['related-child'] ||
		user['related-brother'] ||
		user['related-sister']
</script>

<button
	on:click={onUserClick}
	class="absolute flex cursor-pointer flex-col rounded-lg border border-gray-200 bg-black shadow-lg transition  hover:bg-gray-50 ring-offset-1"
	class:opacity-30={$activeUser?.id && $activeUser?.id !== user.id}
	class:scale-75={$activeUser?.id && $activeUser?.id !== user.id}
	class:scale-105={isActive}
	class:scale-80={isRelated}
	class:opacity-100={isRelated}
	class:ring-2={isRelated || isActive}
	class:ring-yellow-400={isRelated || isActive}
	class:hover:scale-90={!isActive}
	class:hover:opacity-80={!isActive}
	{style}
>
	{#if isActive}
		<ActiveIndicator />
	{/if}
	{#if user['related-father']}
		<RelationIndicator relation="father" />
	{/if}
	{#if user['related-mother']}
		<RelationIndicator relation="mother" />
	{/if}
	{#if user['related-child']}
		<RelationIndicator relation="child" />
	{/if}
	{#if user['related-brother']}
		<RelationIndicator relation="brother" />
	{/if}
	{#if user['related-sister']}
		<RelationIndicator relation="sister" />
	{/if}
	{#if user['related-partner']}
		<RelationIndicator relation="partner" />
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
