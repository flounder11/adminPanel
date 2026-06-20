import TableBody from '../../components/TableBody'
import TableTitles from '../../components/TableTitles'
import PaginationItems from '../../components/ui/PaginationItems'
import { usePagination } from '../../hooks/usePagination'
import { useUsersSort } from '../../hooks/useUsersSort'
import type { IUser } from '../../types/user'

interface IUsersTableProps {
	users: IUser[]
}

export default function UsersTable({ users }: IUsersTableProps) {
	const { sort, sortedUsers, handleSort } = useUsersSort(users)

	const pagination = usePagination({ data: sortedUsers })

	return (
		<div>
			<table className="w-full border-collapse">
				<TableTitles
					sort={sort}
					handleSort={handleSort}
				/>
				<TableBody users={pagination.currentData} />
			</table>

			<PaginationItems
				currentPage={pagination.currentPage}
				totalPages={pagination.totalPages}
				onNext={pagination.nextPage}
				onPrev={pagination.prevPage}
				onPageChange={pagination.setCurrentPage}
			/>
		</div>
	)
}
