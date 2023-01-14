import { storeToRefs } from 'pinia'
import { useUsersStore } from '@/store/useUsersStore'
export const useUsers = () => {
  const usersStore = useUsersStore()
  const { users } = storeToRefs(usersStore)

  const getUsers = async () => {
    await usersStore.fetchUsers()
  }

  return { users, getUsers }
}
