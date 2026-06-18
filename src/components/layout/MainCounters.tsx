import Counter from '../ui/Counter'

export default function MainCounters() {
	return (
		<div>
			<Counter
				title="Всего пользователей"
				counters={444}
			/>
			<Counter
				title="Средний возраст"
				counters={12}
			/>
			<Counter
				title="Мужчин"
				counters={2}
			/>
			<Counter
				title="Женщин"
				counters={442}
			/>
		</div>
	)
}
