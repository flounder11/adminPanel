import TableBody from '../../components/TableBody'
import TableTitles from '../../components/TableTitles'
import { useUsersSort } from '../../hooks/useUsersSort'

export default function UsersTable() {
	const users = [
		{
			id: 1,
			name: 'igor',
			email: 'flovpn@mail.ur',
			age: 19,
			gender: 'male',
			city: 'rnd',
			department: 'frontend'
		},
		{
			id: 2,
			name: 'agor',
			email: 'asflovpn@mail.ur',
			age: 22,
			gender: 'male',
			city: 'rnd',
			department: 'frontend'
		}
	]

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
