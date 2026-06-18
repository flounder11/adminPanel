import { Card, CardContent, CardHeader } from './card'

type CounterProps = {
	title: string
	counters: number
}

export default function Counter({ title, counters }: CounterProps) {
	return (
		<div>
			<Card>
				<CardHeader>{title}</CardHeader>
				<CardContent>{counters}</CardContent>
			</Card>
		</div>
	)
}
