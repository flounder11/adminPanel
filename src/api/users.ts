import axios from 'axios'

export interface IUsers {
	id: number
	firstName: string
	email: string
	age: number
	gender: string
	city: string
	department: string
}

export const getAllUsers = async () => {
	const res = await axios.get<{ users: IUsers[] }>(
		'https://dummyjson.com/users?limit=0'
	)

	return res.data.users
}
