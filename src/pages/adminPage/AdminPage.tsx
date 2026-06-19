import { useState } from 'react'
import FilterPanel from './FilterPanel'
import UsersTable from './UsersTable'

export interface IFilter {
	gender: string
	city: string
	department: string
	search: string
}

export default function AdminPage() {
	const [filter, setFilter] = useState<IFilter>({
		gender: '',
		city: '',
		department: '',
		search: ''
	})

	const users = [
		{
			id: 1,
			firstName: 'igor',
			email: 'flovpn@mail.ur',
			age: 19,
			gender: 'male',
			city: 'rnd',
			department: 'frontend'
		},
		{
			id: 2,
			firstName: 'agor',
			email: 'asflovpn@mail.ur',
			age: 22,
			gender: 'female',
			city: 'rnd',
			department: 'frontend'
		},
		{
			id: 3,
			firstName: 'goga',
			email: 'bknovpn@mail.ur',
			age: 12,
			gender: 'male',
			city: 'rnd',
			department: 'frontend'
		}
	]

	// фильтрация итогового массива
	const filtredUsers = users.filter(user => {
		const genderMatch = !filter.gender || user.gender === filter.gender
		const cityMatch = !filter.city || user.city === filter.city
		const departmentMatch =
			!filter.department || user.department === filter.department
		const searchMatch =
			!filter.search ||
			user.firstName.toLowerCase().includes(filter.search.toLowerCase()) ||
			user.email.toLowerCase().includes(filter.search.toLowerCase())

		return genderMatch && cityMatch && departmentMatch && searchMatch
	})

	return (
		<div className="flex flex-col gap-y-3">
			<FilterPanel
				filter={filter}
				setFilter={setFilter}
			/>

			{/* передаем на рендер таблицы уже отфильтрованный массив */}
			<UsersTable users={filtredUsers} />
		</div>
	)
}
