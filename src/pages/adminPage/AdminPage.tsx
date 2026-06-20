import { useEffect, useState } from 'react'
import { useAxiosUsers, useUsers } from '../../store/useUserStore'
import FilterPanel from './FilterPanel'
import UsersTable from './UsersTable'

export interface IFilter {
	gender: string
	search: string
	city: string
	department: string
}

export default function AdminPage() {
	const [filter, setFilter] = useState<IFilter>({
		gender: '',
		search: '',
		city: '',
		department: ''
	})

	const users = useUsers()
	const axiosUsers = useAxiosUsers()
	//const isLoading = useIsLoading()

	useEffect(() => {
		axiosUsers()
	}, [axiosUsers])

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
