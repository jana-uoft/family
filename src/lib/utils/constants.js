export const USER_CARD_SIZE = {
	width: 150,
	height: 230
}

export const positionUsers = (users) => {
	// position all users in a grid relative to the USER_CARD_SIZE and viewport
	const positionedUsers = users.map((user, i) => {
		// get the optimal number of columns
		const columns = Math.floor(window.innerWidth / USER_CARD_SIZE.width)
		// maintain a gap of 1rem between each user
		const gap = 16
		// keep a padding of 1rem in all directions
		const padding = 16
		// calculate the x and y position of the user
		const x = (i % columns) * (USER_CARD_SIZE.width + gap) + padding
		const y = Math.floor(i / columns) * (USER_CARD_SIZE.height + gap) + padding
		return { ...user, x, y }
	})
	return positionedUsers
}
