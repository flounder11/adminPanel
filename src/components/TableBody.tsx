import type { IUser } from '../types/user'
import TableRow from './TableRow'

interface ITableBodyProps {
	users: IUser[]
}

export default function TableBody({ users }: ITableBodyProps) {
	if (users.length === 0) {
		return <tbody>Ничего не найдено</tbody>
	}

	return (
		<tbody>
			{users.length === 0 ? (
				<tr>
					<td
						colSpan={5}
						className="text-center py-4"
					>
						Ничего не найдено
					</td>
				</tr>
			) : (
				users.map(user => (
					<TableRow
						key={user.id}
						user={user}
					/>
				))
			)}
		</tbody>
	)
}
