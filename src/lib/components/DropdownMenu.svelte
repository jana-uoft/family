<script>
	import { scale } from 'svelte/transition'
	import { quintOut } from 'svelte/easing'

	import { clickOutside } from '$lib/utils/clickOutside'
	import { trapFocus } from '$lib/utils/trapFocus'

	let isOpen = false
	const uniqueId = `dropdown-${Math.random()}`

	const toggle = () => {
		isOpen = !isOpen
	}

	const onClose = () => {
		isOpen = false
	}

	const handleKeyEscUpDown = async (e) => {
		// ignore if menu is not open
		if (!isOpen) return
		// close the menu if the user presses the escape key
		if (e.key === 'Escape') {
			// re-focus the trigger button
			document.getElementById(uniqueId).focus()
			onClose()
		}
		// we're only interested in handling up & down arrow keys
		if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') return
		// currently focused element (if any)
		const current = document.activeElement
		// get our collection of list elements and turn it into an actual array
		const items = [...document.querySelectorAll('[role="menuitem"]')]
		// attempt to match the currently focused element to an index in our array of list elements
		const currentIndex = items.indexOf(current)
		// index of the list element to be newly focused
		let newIndex
		// if the currently focused element was NOT a list item, then default to focusing the first item in the list (index 0)
		if (currentIndex === -1) {
			newIndex = 0
			// otherwise, the currently focused element is an item in our list
		} else {
			if (e.key === 'ArrowUp') {
				newIndex = (currentIndex + items.length - 1) % items.length
			} else if (e.key === 'ArrowDown') {
				newIndex = (currentIndex + 1) % items.length
			}
		}
		if (items[newIndex]) {
			// blur (= unfocus) the currently focused element (whether it's a list element or not)
			current.blur()
			// focus the list element at the computed index
			items[newIndex]?.focus()
		}
	}
</script>

<div class="relative inline-block text-left" on:keyup={handleKeyEscUpDown}>
	<button
		type="button"
		class="group rounded-md bg-black text-left text-sm font-medium hover:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-white p-1 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-500"
		id={uniqueId}
		aria-expanded="false"
		aria-haspopup="true"
		on:click={toggle}
	>
		<slot name="trigger" />
	</button>

	<!-- Dropdown menu -->
	{#if isOpen}
		<div
			id="menu"
			use:clickOutside
			use:trapFocus
			on:clickOutside={onClose}
			transition:scale|local={{ duration: 300, opacity: 0.5, easing: quintOut }}
			class="absolute z-30 w-max mt-1 rounded-md shadow-lg ring-1 ring-white backdrop-blur-md focus:outline-none bg-black ring-offset-1 bottom-0"
			role="menu"
			aria-orientation="vertical"
			aria-labelledby={uniqueId}
		>
			<slot name="content" />
		</div>
	{/if}
</div>
