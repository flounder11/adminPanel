import type { IUser } from '../types/user'
import TableRow from './TableRow'

interface ITableBodyProps {
	users: IUser[]
}

export default function TableBody({ users }: ITableBodyProps) {
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
