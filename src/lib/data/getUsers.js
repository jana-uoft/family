export default async function getUsers() {
	return [
		{
			id: 1,
			name: 'Mathi',
			birthDate: '2022-02-12T00:00:00Z',
			deathDate: '2022-02-12T00:00:00Z',
			marriageDate: '2022-02-12T00:00:00Z',
			location: 'Italy, Rapallo, Genova',
			father: null,
			mother: null,
			brothers: [],
			sisters: [],
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
			father: null,
			mother: null,
			brothers: [],
			sisters: [],
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
			father: 1,
			mother: 2,
			brothers: [],
			sisters: [],
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
			father: null,
			mother: null,
			brothers: [],
			sisters: [],
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
			father: null,
			mother: null,
			brothers: [],
			sisters: [],
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
			father: 4,
			mother: 5,
			brothers: [7],
			sisters: [],
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
			father: 4,
			mother: 5,
			brothers: [6],
			sisters: [],
			children: [],
			partner: null,
			avatar: 'https://randomuser.me/api/portraits/men/7.jpg'
		}
	]
		.map((value) => ({ value, sort: Math.random() }))
		.sort((a, b) => a.sort - b.sort)
		.map(({ value }) => value)
}
