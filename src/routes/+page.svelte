<script>
	import { onMount } from 'svelte'
	import { select } from 'd3-selection'
	import getUsers from '$lib/data/getUsers'
	import { users, activeUser, d3Scale } from '$lib/store'
	import { positionUsers } from '$lib/utils/constants'

	import User from '$lib/components/User.svelte'
	import Loading from '$lib/components/Loading.svelte'
	import Legend from '$lib/components/Legend.svelte'

	let isLoading = true
	let zoom
	let zoomTransform
	let innerWidth

	// reposition the users when the window is resized
	$: if (innerWidth) {
		$users = positionUsers($users)
	}

	const sleep = (ms) => new Promise((f) => setTimeout(f, ms))

	onMount(async () => {
		$users = await getUsers()
		// position all users in a grid relative to the USER_CARD_SIZE and viewport
		$users = positionUsers($users)
		await sleep(2000) // simulate network delay
		isLoading = false
		let d3Zoom = await import('d3-zoom')
		zoom = d3Zoom.zoom
		zoomTransform = d3Zoom.zoomTransform
		select('#Nodes').call(zoom().scaleExtent([0.4, 4]).on('zoom', handleZoom))
	})

	// function to handle zoom events - arguments: d3ZoomEvent
	function handleZoom(e) {
		// add a store that contains the current value of the d3-zoom's scale to be used in onMouseMove function
		d3Scale.set(e.transform.k)
		// transform div elements (nodes)
		let transform = zoomTransform(this)
		// selects and transforms all node divs from class 'Node' and performs transformation
		select('#Node')
			.style(
				'transform',
				'translate(' + transform.x + 'px,' + transform.y + 'px) scale(' + transform.k + ')'
			)
			.style('transform-origin', '0 0')
	}

	const clearActiveUser = () => {
		$activeUser = {}
		$users = $users.map((u) => {
			delete u['related-partner']
			delete u['related-father']
			delete u['related-mother']
			delete u['related-child']
			delete u['related-brother']
			delete u['related-sister']
			return u
		})
	}
</script>

<svelte:window bind:innerWidth />

{#if isLoading}
	<Loading />
{:else}
	<Legend />
	<!-- This is the container that holds GraphViewr -->
	<div
		id="Nodes"
		class="absolute h-full w-full cursor-move overflow-hidden"
		on:contextmenu|preventDefault
		on:click|self={clearActiveUser}
		on:keyup|self={clearActiveUser}
		on:touchend|self={clearActiveUser}
	>
		<!-- This container is transformed by d3zoom -->
		<div id="Node">
			{#each $users as user (user.id)}
				<User {user} />
			{/each}
		</div>
	</div>
{/if}
