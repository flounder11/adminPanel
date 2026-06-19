import { useMemo, useState } from 'react'
import type { IUser } from '../types/user'

type SortDirection = 'asc' | 'desc'

export interface ISortState {
	field: keyof IUser
	direction: SortDirection
}

export function useUsersSort(users: IUser[]) {
	// состояние сортировки
	const [sort, setSort] = useState<ISortState | null>(null)

	// сама сортировка
	const handleSort = (field: keyof IUser) => {
		// при выборе колонки, заменяется значение параметра сортировки
		setSort(prev => {
			if (!prev || prev.field !== field) {
				return {
					field,
					direction: 'asc'
				}
			}

			// меняется вариант сортировки на убывание и наоборот
			return {
				field,
				direction: prev.direction === 'asc' ? 'desc' : 'asc'
			}
		})
	}

	// рендеринг страницы только при изменении массива
	const sortedUsers = useMemo(() => {
		if (!sort) return users

		// получаем значение из выбранного поля
		return [...users].sort((a, b) => {
			const aValue = a[sort.field]
			const bValue = b[sort.field]

			// сортировка чисел
			if (typeof aValue === 'number' && typeof bValue === 'number') {
				return sort.direction === 'asc' ? aValue - bValue : bValue - aValue
			}

			// сортировка слов
			const compareResult = String(aValue).localeCompare(String(bValue), 'ru')

			return sort.direction === 'asc' ? compareResult : -compareResult
		})
	}, [users, sort])
	return {
		sort,
		sortedUsers,
		handleSort
	}
}
