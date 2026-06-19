import { useEffect, useRef, useState } from 'react'

interface Option {
	value: string
	label: string
}

interface CustomSelectProps {
	options: Option[]
	selectedValue: string
	onChange: (value: string) => void
	placeholder?: string
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
	options,
	selectedValue,
	onChange,
	placeholder = 'Выберите значение'
}) => {
	const [isOpen, setIsOpen] = useState(false)
	const selectRef = useRef<HTMLDivElement>(null)

	const selectedOption = options.find(opt => opt.value === selectedValue)

	// закрытие селекта при клике в любое место экрана
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				selectRef.current &&
				!selectRef.current.contains(event.target as Node)
			) {
				setIsOpen(false)
			}
		}
		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [])

	return (
		<div
			ref={selectRef}
			className="relative w-64 font-sans"
		>
			<button
				type="button"
				onClick={() => setIsOpen(!isOpen)}
				className="flex w-full items-center justify-between rounded-lg border border-gray-300 bg-white px-4 py-2 text-left text-lg text-gray-700 shadow-sm transition-all hover:bg-gray-50 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
			>
				<span className={selectedOption ? 'text-gray-900' : 'text-gray-400'}>
					{selectedOption ? selectedOption.label : placeholder}
				</span>
			</button>

			{isOpen && (
				<ul className="absolute z-10 mt-1.5 max-h-60 w-full overflow-auto rounded-lg border border-gray-200 bg-white p-1 text-lg shadow-lg ring-1 ring-black/5 focus:outline-none">
					{options.map(option => {
						const isSelected = option.value === selectedValue
						return (
							<li
								key={option.value}
								onClick={() => {
									onChange(option.value)
									setIsOpen(false)
								}}
								className={`cursor-pointer select-none rounded-md px-3 py-2 transition-colors ${
									isSelected
										? 'bg-blue-500 text-white font-medium'
										: 'text-gray-700 hover:bg-gray-100'
								}`}
							>
								{option.label}
							</li>
						)
					})}
				</ul>
			)}
		</div>
	)
}
