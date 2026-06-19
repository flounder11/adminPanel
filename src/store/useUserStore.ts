import { create, type StateCreator } from 'zustand'
import { getAllUsers, type IUsers } from '../api/users'

interface IAction {
	axiosUsers: () => Promise<void>
	infoUser: (id: number) => void
}

interface IInitialState {
	users: IUsers[]
	selectedUser: IUsers | null
	isLoading: boolean
}

interface IUserState extends IAction, IInitialState {}

const initialState: IInitialState = {
	users: [],
	selectedUser: null,
	isLoading: false
}

const userStore: StateCreator<IUserState> = (set, get) => ({
	...initialState,

	axiosUsers: async () => {
		set({ isLoading: true })

		try {
			const users = await getAllUsers()
			set({ users })
		} catch (error) {
			console.log('Error axios users: ', error)

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

export const infoUser = () => useUserStore.getState().infoUser

export const useAxiosUsers = () => useUserStore(state => state.axiosUsers)
