import { Card, CardContent, CardDescription, CardTitle } from './card'

type CounterProps = {
	title: string
	counters: number
}

export default function Counter({ title, counters }: CounterProps) {
	return (
		<Card className="w-2xs border rounded-lg">
			<CardContent>
				<CardTitle className="text-lg font-medium">{title}</CardTitle>
				<CardDescription className="text-xl font-semibold text-black">
					{counters}
				</CardDescription>
			</CardContent>
		</Card>
	)
}
