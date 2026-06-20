import type { IUser } from '../types/user'
import TableRow from './TableRow'

interface ITableBodyProps {
	users: IUser[]
}

export default function TableBody({ users }: ITableBodyProps) {
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
		<tbody>
			{users.map(user => (
				<TableRow
					key={user.id}
					user={user}
				/>
			))}
		</tbody>
	)
}
