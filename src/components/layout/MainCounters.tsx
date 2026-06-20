import { useEffect, useMemo } from 'react'
import { useAxiosUsers, useIsLoading, useUsers } from '../../store/useUserStore'
import Counter from '../ui/Counter'
import { Skeleton } from '../ui/skeleton'

export default function MainCounters() {
	const users = useUsers()
	const axiosUsers = useAxiosUsers()
	const isLoading = useIsLoading()

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
		<div className="my-6 max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
			{isLoading ? (
				<>
					<Skeleton className="w-2xs bg-gray-200 h-22 rounded-lg" />
					<Skeleton className="w-2xs bg-gray-200 h-22 rounded-lg" />
					<Skeleton className="w-2xs bg-gray-200 h-22 rounded-lg" />
					<Skeleton className="w-2xs bg-gray-200 h-22 rounded-lg" />
				</>
			) : (
				<>
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
				</>
			)}
		</div>
	)
}
