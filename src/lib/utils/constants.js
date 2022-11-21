export const USER_CARD_SIZE = {
	width: 150,
	height: 230
}

export const positionUsers = (users) => {
	const positionedUsers = users.map((user, i) => {
		// position the users maximizing the spread of the visible viewport without overlapping
		// start from the center of the viewport
		// fill the viewport with the users allowing to overflow the viewport
		// the overflow will be hidden by the viewport
		// calculate the optimal number of columns based on viewport width
		// maintain a gap of 16px between the users
		const columns = Math.max(Math.floor(window.innerWidth / USER_CARD_SIZE.width), users.length / 6)
		const x = (i % columns) * USER_CARD_SIZE.width + 16 * (i % columns)
		const y = Math.floor(i / columns) * USER_CARD_SIZE.height + 16 * Math.floor(i / columns)
		return {
			...user,
			x,
			y
		}
	})
	return positionedUsers
}
