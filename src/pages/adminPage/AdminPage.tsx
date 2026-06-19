import FilterPanel from './FilterPanel'
import UsersTable from './UsersTable'

export default function AdminPage() {
	return (
		<div className="flex flex-col gap-y-3">
			<FilterPanel />

			<UsersTable />
		</div>
	)
}
