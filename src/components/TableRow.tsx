import type { IUser } from '../types/user'

interface ITableRowProps {
	user: IUser
	onClick: () => void
}

export default function TableRow({ user, onClick }: ITableRowProps) {
	return (
		<tr
			onClick={onClick}
			className="border-b border-x"
		>
			<td className="px-4 py-3 text-lg">{user.id}</td>
			<td className="px-4 py-3 text-lg">{user.firstName}</td>
			<td className="px-4 py-3 text-lg">{user.email}</td>
			<td className="px-4 py-3 text-lg">{user.age}</td>
			<td className="px-4 py-3 text-lg">{user.gender}</td>
			<td className="px-4 py-3 text-lg">{user.city}</td>
			<td className="px-4 py-3 text-lg">{user.department}</td>
		</tr>
	)
}
