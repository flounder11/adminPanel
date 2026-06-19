import { useEffect, useMemo } from 'react'
import { useAxiosUsers, useUsers } from '../../store/useUserStore'
import Counter from '../ui/Counter'

export default function MainCounters() {
	const users = useUsers()
	const axiosUsers = useAxiosUsers()
	// const isLoading = useIsLoading()

	console.log(users)
	useEffect(() => {
		axiosUsers()
	}, [axiosUsers])

	const stats = useMemo(() => {
		const manUsers = users.filter(u => u.gender === 'male').length
		const womanUsers = users.filter(u => u.gender === 'female').length
		const middleAge = users.length
			? users.reduce((acc, u) => acc + u.age, 0) / users.length
			: 0

		const truncMiddleAge = Math.trunc(middleAge)

		return { manUsers, womanUsers, truncMiddleAge }
	}, [users])

	return (
		<div className="flex items-center gap-x-3 my-6">
			<Counter
				title="Всего пользователей"
				counters={users.length}
			/>
			<Counter
				title="Средний возраст"
				counters={stats.truncMiddleAge}
			/>
			<Counter
				title="Мужчин"
				counters={stats.manUsers}
			/>
			<Counter
				title="Женщин"
				counters={stats.womanUsers}
			/>
		</div>
	)
}
