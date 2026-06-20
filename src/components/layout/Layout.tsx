import type { ReactNode } from 'react'
import MainCounters from './MainCounters'

interface IProps {
	children: ReactNode
}

export default function Layout({ children }: IProps) {
	return (
		<div className="max-w-[1600px] mx-auto">
			<MainCounters />
			<main>{children}</main>
		</div>
	)
}
