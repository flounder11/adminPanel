import { useState } from 'react'
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
	setFilter: React.Dispatch<React.SetStateAction<IFilter>>
}

export default function FilterPanel({ setFilter }: FilterProps) {
	const [gender, setGender] = useState('')
	const [department, setDepartment] = useState('')
	const [city, setCity] = useState('')

	// через обратный сеттер получаем данные в родительский компонент
	const confirmFilters = () => {
		console.log(gender, department, city)
		setFilter({
			gender,
			department,
			city
		})
	}

	const clearFilters = () => {
		setCity('')
		setDepartment('')
		setGender('')

		setFilter({
			gender: '',
			department: '',
			city: ''
		})
	}

	return (
		<div className="flex items-center gap-x-3">
			<Input className="max-w-lg text-2xl h-11" />

			<CustomSelect
				options={departmentOptions}
				selectedValue={department}
				onChange={setDepartment}
				placeholder="Выберите отдел"
			/>

			<CustomSelect
				options={genderOptions}
				selectedValue={gender}
				onChange={setGender}
				placeholder="Выберите пол"
			/>

			<CustomSelect
				options={cityOptions}
				selectedValue={city}
				onChange={setCity}
				placeholder="Выберите город"
			/>

			<Button
				variant="outline"
				size="lg"
				className="shadow-sm text-base"
				onClick={confirmFilters}
			>
				Применить
			</Button>

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
