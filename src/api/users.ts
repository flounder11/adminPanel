import axios from 'axios'
import type { IUser, IUserApi } from '../types/user'

export const getAllUsers = async () => {
	const mapUser = (u: IUserApi): IUser => ({
		id: u.id,
		firstName: u.firstName,
		email: u.email,
		age: u.age,
		gender: u.gender,

		city: u.address.city,
		department: u.company.department
	})

	const res = await axios.get<{ users: IUserApi[] }>(
		'https://dummyjson.com/users?limit=0'
	)

	return res.data.users.map(mapUser)
}
