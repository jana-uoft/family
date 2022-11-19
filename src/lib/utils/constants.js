export const USER_CARD_SIZE = {
	width: 150,
	height: 230
}

export const positionUsers = (users) => {
	let previousUser = null
	const positionedUsers = users.map((user, i) => {
		// spread out the users filling the entire viewport width and height
		// keep adding the next user in a circle around the previous user
		// the first user is positioned at the center of the viewport
		if (previousUser) {
			const angle = (i * 2 * Math.PI) / users.length
			const x = previousUser.x + Math.cos(angle) * USER_CARD_SIZE.width * 2
			const y = previousUser.y + Math.sin(angle) * USER_CARD_SIZE.height * 2
			return { ...user, x, y }
		} else {
			// center the first user in the viewport
			const x = window.innerWidth / 2 - USER_CARD_SIZE.width / 2
			const y = window.innerHeight / 2 - USER_CARD_SIZE.height / 2
			previousUser = { ...user, x, y }
			return previousUser
		}
	})
	return positionedUsers
}
