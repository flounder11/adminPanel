import type { IUser } from '../types/user'

export const USER_COLUMNS: {
	key: keyof IUser
	title: string
	sortable?: boolean
}[] = [
	{
		key: 'id',
		title: 'Id',
		sortable: true
	},
	{
		key: 'name',
		title: 'Имя',
		sortable: true
	},
	{
		key: 'email',
		title: 'Email',
		sortable: true
	},
	{
		key: 'age',
		title: 'Возраст',
		sortable: true
	},
	{
		key: 'gender',
		title: 'Пол',
		sortable: false
	},
	{
		key: 'city',
		title: 'Город',
		sortable: false
	},
	{
		key: 'department',
		title: 'Отдел',
		sortable: false
	}
]
