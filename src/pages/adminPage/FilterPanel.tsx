import { useEffect, useState } from 'react'
import { Button } from '../../components/ui/button'
import { CustomSelect } from '../../components/ui/CustomSelect'
import { Input } from '../../components/ui/input'
import { useUsers } from '../../store/useUserStore'
import type { IFilter } from './AdminPage'

// const genderOptions = [
// 	{ value: 'male', label: 'Мужской' },
// 	{ value: 'female', label: 'Женский' }
// ]

// const departmentOptions = [
// 	{ value: 'engineering', label: 'Инженер' },
// 	{ value: 'support', label: 'Поддержка' }
// ]

// const cityOptions = [
// 	{ value: 'RND', label: 'Ростов' },
// 	{ value: 'Kras', label: 'Краснодар' }
// ]

interface FilterProps {
	filter: IFilter
	setFilter: React.Dispatch<React.SetStateAction<IFilter>>
}

export default function FilterPanel({ filter, setFilter }: FilterProps) {
	// через обратный сеттер получаем данные в родительский компонент

	const clearFilters = () => {
		setFilter({
			gender: '',
			department: '',
			city: '',
			search: ''
		})
	}

	// локальный input для задержки
	const [searchInput, setSearchInput] = useState('')

	// сам debounce
	useEffect(() => {
		const timeout = setTimeout(() => {
			setFilter(prev => ({
				...prev,
				search: searchInput
			}))
		}, 400)
		return () => clearTimeout(timeout)
	}, [searchInput, setFilter])

	const users = useUsers()

	const departments = [...new Set(users.map(u => u.department))]
	const genders = [...new Set(users.map(u => u.gender))]
	const city = [...new Set(users.map(u => u.city))]

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 items-end">
			<Input
				placeholder="test@gmail.com"
				value={searchInput}
				onChange={e => setSearchInput(e.target.value)}
				className="max-w-lg text-2xl h-11"
			/>

			<CustomSelect
				options={departments.map(d => ({ value: d, label: d }))}
				selectedValue={filter.department}
				onChange={value =>
					setFilter(prev => ({
						...prev,
						department: value
					}))
				}
				placeholder="Выберите отдел"
			/>

			<CustomSelect
				options={genders.map(d => ({ value: d, label: d }))}
				selectedValue={filter.gender}
				onChange={value =>
					setFilter(prev => ({
						...prev,
						gender: value
					}))
				}
				placeholder="Выберите пол"
			/>

			<CustomSelect
				options={city.map(d => ({ value: d, label: d }))}
				selectedValue={filter.city}
				onChange={value =>
					setFilter(prev => ({
						...prev,
						city: value
					}))
				}
				placeholder="Выберите город"
			/>

			<Button
				variant="outline"
				size="lg"
				className="shadow-sm text-base"
				onClick={clearFilters}
			>
				Сбросить
			</Button>
		</div>
	)
}
