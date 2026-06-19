import { useEffect, useState } from 'react'
import { Button } from '../../components/ui/button'
import { CustomSelect } from '../../components/ui/CustomSelect'
import { Input } from '../../components/ui/input'
import type { IFilter } from './AdminPage'

const genderOptions = [
	{ value: 'male', label: 'Мужской' },
	{ value: 'female', label: 'Женский' }
]

const departmentOptions = [
	{ value: 'engineering', label: 'Инженер' },
	{ value: 'support', label: 'Поддержка' }
]

const cityOptions = [
	{ value: 'RND', label: 'Ростов' },
	{ value: 'Kras', label: 'Краснодар' }
]

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
	}, [searchInput])

	return (
		<div className="flex items-center gap-x-3">
			<Input
				placeholder="test@gmail.com"
				value={searchInput}
				onChange={e => setSearchInput(e.target.value)}
				className="max-w-lg text-2xl h-11"
			/>

			<CustomSelect
				options={departmentOptions}
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
				options={genderOptions}
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
				options={cityOptions}
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
