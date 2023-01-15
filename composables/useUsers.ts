import { storeToRefs } from 'pinia'
import { useUsersStore } from '@/store/useUsersStore'
export const useUsers = () => {
  const usersStore = useUsersStore()
  const { users, user, loading } = storeToRefs(usersStore)

  const getUsers = async () => {
    await usersStore.fetchUsers()
  }

  const deleteUser = async (id: string) => {
    await usersStore.deleteUser(id)
  }

  const detailUser = async (id: string) => {
    await usersStore.detailUser(id)
  }

  const addUser = async (user: User) => {
    await usersStore.addUser(user)
  }

  return { users, user, getUsers, deleteUser, detailUser, addUser, loading }
}
