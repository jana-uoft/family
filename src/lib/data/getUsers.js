export default async function getUsers() {
	return [
		{
			id: 1,
			name: 'Mathi',
			birthDate: '2022-02-12T00:00:00Z',
			deathDate: '2022-02-12T00:00:00Z',
			marriageDate: '2022-02-12T00:00:00Z',
			location: 'Italy, Rapallo, Genova',
			parents: [],
			siblings: [],
			children: [3],
			partner: 2,
			avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
		},
		{
			id: 2,
			name: 'Jeeva',
			birthDate: '2022-02-12T00:00:00Z',
			deathDate: '2022-02-12T00:00:00Z',
			marriageDate: '2022-02-12T00:00:00Z',
			location: 'Italy, Rapallo, Genova',
			parents: [],
			siblings: [],
			children: [3],
			partner: 1,
			avatar: 'https://randomuser.me/api/portraits/women/2.jpg'
		},
		{
			id: 3,
			name: 'Arun Mathiyalakan',
			birthDate: '2022-02-12T00:00:00Z',
			deathDate: '2022-02-12T00:00:00Z',
			marriageDate: '2022-02-12T00:00:00Z',
			location: 'Italy, Rapallo, Genova',
			parents: [1, 2],
			siblings: [],
			children: [],
			partner: null,
			avatar: 'https://randomuser.me/api/portraits/men/3.jpg'
		},
		{
			id: 4,
			name: 'Raj',
			birthDate: '2022-02-12T00:00:00Z',
			deathDate: '2022-02-12T00:00:00Z',
			marriageDate: '2022-02-12T00:00:00Z',
			location: 'Cananda, Toronto, Ontario',
			parents: [],
			siblings: [],
			children: [6, 7],
			partner: 5,
			avatar: 'https://randomuser.me/api/portraits/men/4.jpg'
		},
		{
			id: 5,
			name: 'Vara',
			birthDate: '2022-02-12T00:00:00Z',
			deathDate: '2022-02-12T00:00:00Z',
			marriageDate: '2022-02-12T00:00:00Z',
			location: 'Cananda, Toronto, Ontario',
			parents: [],
			siblings: [],
			children: [6, 7],
			partner: 4,
			avatar: 'https://randomuser.me/api/portraits/women/5.jpg'
		},
		{
			id: 6,
			name: 'Jana Rajakumar',
			birthDate: '2022-02-12T00:00:00Z',
			deathDate: '2022-02-12T00:00:00Z',
			marriageDate: '2022-02-12T00:00:00Z',
			location: 'Cananda, Toronto, Ontario',
			parents: [4, 5],
			siblings: [7],
			children: [],
			partner: null,
			avatar: 'https://randomuser.me/api/portraits/men/6.jpg'
		},
		{
			id: 7,
			name: 'Madhu',
			birthDate: '2022-02-12T00:00:00Z',
			deathDate: '2022-02-12T00:00:00Z',
			marriageDate: '2022-02-12T00:00:00Z',
			location: 'Srilanka, Toronto, Ontario',
			parents: [4, 5],
			siblings: [6],
			children: [],
			partner: null,
			avatar: 'https://randomuser.me/api/portraits/men/7.jpg'
		}
	]
		.map((value) => ({ value, sort: Math.random() }))
		.sort((a, b) => a.sort - b.sort)
		.map(({ value }) => value)
}
