import { create, type StateCreator } from 'zustand'
import { getAllUsers } from '../api/users'
import type { IUser } from '../types/user'

interface IAction {
	axiosUsers: () => Promise<void>
	infoUser: (id: number) => void
}

interface IInitialState {
	users: IUser[]
	selectedUser: IUser | null
	isLoading: boolean
	error: string | null
}

interface IUserState extends IAction, IInitialState {}

const initialState: IInitialState = {
	users: [],
	selectedUser: null,
	isLoading: false,
	error: null
}

const userStore: StateCreator<IUserState> = (set, get) => ({
	...initialState,

	axiosUsers: async () => {
		set({ isLoading: true })

		try {
			const users = await getAllUsers()
			set({ users })
		} catch (error) {
			set({ error: 'Не удалось загрузить пользователей' })

			console.error(error)
		} finally {
			set({ isLoading: false })
		}
	},
	infoUser: (id: number) => {
		const user = get().users.find(u => u.id === id)
		set({ selectedUser: user ?? null })
		console.log(user)
	}
})

const useUserStore = create<IUserState>()(userStore)

export const useUsers = () => useUserStore(state => state.users)
export const useIsLoading = () => useUserStore(state => state.isLoading)
export const useAxiosUsers = () => useUserStore(state => state.axiosUsers)
export const useError = () => useUserStore(state => state.error)

export const infoUser = () => useUserStore.getState().infoUser
