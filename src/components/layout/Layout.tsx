import { Outlet } from 'react-router-dom'
import MainCounters from './MainCounters'

export default function Layout() {
	return (
		<div className="max-w-[1600px] mx-auto">
			<MainCounters />
			<main>
				<Outlet />
			</main>
		</div>
	)
}
