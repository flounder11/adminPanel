import { useState } from 'react'
import { Button } from '../../components/ui/button'
import { CustomSelect } from '../../components/ui/CustomSelect'
import { Input } from '../../components/ui/input'

const genderOptions = [
	{ value: 'male', label: 'Мужской' },
	{ value: 'female', label: 'Женский' }
]

const departmentOptions = [
	{ value: 'sngineering', label: 'Инженер' },
	{ value: 'support', label: 'Поддержка' }
]

const cityOptions = [
	{ value: 'RND', label: 'Ростов' },
	{ value: 'Kras', label: 'Краснодар' }
]

export default function FilterPanel() {
	const [gender, setGender] = useState('')
	const [department, setDepartment] = useState('')
	const [city, setCity] = useState('')

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
				className="shadow-sm"
			>
				Применить
			</Button>

			<Button
				variant="outline"
				size="lg"
				className="shadow-sm"
			>
				Сбросить
			</Button>
		</div>
	)
}
