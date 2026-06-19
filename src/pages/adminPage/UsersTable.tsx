import TableBody from '../../components/TableBody'
import TableTitles from '../../components/TableTitles'
import { useUsersSort } from '../../hooks/useUsersSort'
import type { IUser } from '../../types/user'

interface IUsersTableProps {
	users: IUser[]
}

export default function UsersTable({ users }: IUsersTableProps) {
	const { sort, sortedUsers, handleSort } = useUsersSort(users)

	return (
		<table className="w-full border-collapse">
			<TableTitles
				sort={sort}
				handleSort={handleSort}
			/>
			<TableBody users={sortedUsers} />
		</table>
	)
}
