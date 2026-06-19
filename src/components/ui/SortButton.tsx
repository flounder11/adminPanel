import { ArrowDown, ArrowUp, ArrowUpDown } from 'lucide-react'
import type { ISortState } from '../../hooks/useUsersSort'
import type { IUser } from '../../types/user'

interface ISortButtonProps {
	handleSort: (field: keyof IUser) => void
	field: keyof IUser
	title: string
	sort: ISortState
}

export function SortButton({
	handleSort,
	field,
	title,
	sort
}: ISortButtonProps) {
	const isActive = sort?.field === field

	return (
		<button
			className="flex gap-x-1 items-center"
			onClick={() => handleSort(field)}
		>
			{title}

			{!isActive && <ArrowUpDown size={20} />}

			{isActive && sort.direction === 'asc' && <ArrowUp size={20} />}

			{isActive && sort.direction === 'desc' && <ArrowDown size={20} />}
		</button>
	)
}
