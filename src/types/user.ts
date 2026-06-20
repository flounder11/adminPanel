export interface IUser {
	id: number
	firstName: string
	email: string
	age: number
	gender: string
	city: string
	department: string
}

export interface IUserApi {
	id: number
	firstName: string
	email: string
	age: number
	gender: string

	address: {
		city: string
		state: string
		country: string
	}

	company: {
		department: string
		name: string
		title: string
	}
}
