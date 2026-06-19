import MainCounters from './MainCounters'

export default function Layout({ children }) {
	return (
		<div className="max-w-[1600px] mx-auto">
			<MainCounters />
			<main>{children}</main>
		</div>
	)
}
