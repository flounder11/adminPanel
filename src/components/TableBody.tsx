import { useState } from 'react'
import { useAxiosUsers, useError, useIsLoading } from '../store/useUserStore'
import type { IUser } from '../types/user'
import TableRow from './TableRow'
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle
} from './ui/sheet'
import { Skeleton } from './ui/skeleton'

interface ITableBodyProps {
	users: IUser[]
}

export default function TableBody({ users }: ITableBodyProps) {
	const isLoading = useIsLoading()
	const [selectedUser, setSelectedUser] = useState<IUser | null>(null)
	const [open, setOpen] = useState(false)

	const error = useError()
	const axiosUsers = useAxiosUsers()

	if (error) {
		return (
			<div
				className="flex flex-col mx-auto"
				py-4
			>
				<span>Произошла ошибка: {error}</span>

				<button onClick={axiosUsers}>Попробовать еще раз</button>
			</div>
		)
	}

	if (isLoading) {
		return (
			<>
				{Array.from({ length: 10 }).map((_, index) => (
					<tr key={index}>
						<td
							colSpan={7}
							className="py-4"
						>
							<Skeleton className="w-full h-12" />
						</td>
					</tr>
				))}
			</>
		)
	}

	if (!users.length) {
		return (
			<tbody>
				<tr>
					<td
						colSpan={7}
						className="text-center py-4"
					>
						Ничего не найдено
					</td>
				</tr>
			</tbody>
		)
	}

	return (
		<>
			<tbody>
				{users.map(user => (
					<TableRow
						key={user.id}
						user={user}
						onClick={() => {
							setSelectedUser(user)
							setOpen(true)
						}}
					/>
				))}
			</tbody>

			<Sheet
				open={open}
				onOpenChange={setOpen}
			>
				<SheetContent>
					<SheetHeader>
						<SheetTitle>Имя: {selectedUser?.firstName}</SheetTitle>
						<SheetDescription>Email {selectedUser?.email}</SheetDescription>
					</SheetHeader>
					<div className="grid flex-1 auto-rows-min gap-6 px-4">
						<span>Возраст: {selectedUser?.age}</span>

						<div className="grid gap-3">
							<span>Город {selectedUser?.city}</span>
						</div>
					</div>
				</SheetContent>
			</Sheet>
		</>
	)
}
