import { useIsLoading } from '../store/useUserStore'
import type { IUser } from '../types/user'
import { Skeleton } from './ui/skeleton'

interface ITableRowProps {
	user: IUser
}

export default function TableRow({ user }: ITableRowProps) {
	const isLoading = useIsLoading()

	if (isLoading) {
		return (
			<tr>
				<td
					colSpan={7}
					className="py-4"
				>
					<Skeleton className="w-full h-12" />
				</td>
			</tr>
		)
	}

	return (
		<tr className="border-b border-x">
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
