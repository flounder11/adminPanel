import type { ISortState } from '../hooks/useUsersSort'
import type { IUser } from '../types/user'
import { SortButton } from './ui/SortButton'

interface ITableTitlesProps {
	handleSort: (field: keyof IUser) => void
	sort: ISortState | null
}

export default function TableTitles({ handleSort, sort }: ITableTitlesProps) {
	return (
		<thead>
			<tr className="border-b">
				<th className="px-4 py-3 text-left border">
					<SortButton
						handleSort={handleSort}
						field="id"
						title="Id"
						sort={sort}
					/>
				</th>
				<th className="px-4 py-3 text-left border">
					<SortButton
						handleSort={handleSort}
						field="firstName"
						title="Имя"
						sort={sort}
					/>
				</th>

				<th className="px-4 py-3 text-left border">
					<SortButton
						handleSort={handleSort}
						field="email"
						title="Email"
						sort={sort}
					/>
				</th>

				{/* <th className="px-4 py-3 text-left border">Возраст</th> */}
				<th className="px-4 py-3 text-left border">
					<SortButton
						handleSort={handleSort}
						field="age"
						title="Возраст"
						sort={sort}
					/>
				</th>

				<th className="px-4 py-3 text-left border">Пол</th>

				<th className="px-4 py-3 text-left border">Город</th>
				<th className="px-4 py-3 text-left border">Департамент</th>
			</tr>
		</thead>
	)
}
