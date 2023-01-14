import { defineStore } from 'pinia'
import { getUsers, deleteUser, getDetailUser, addUser } from '@/services/api'

export const useUsersStore = defineStore('users', {
  state: () => ({
    users: [],
    user: {},
  }),
  actions: {
    async fetchUsers() {
      const { result } = await getUsers()
      this.users = result
    },
    async deleteUser(id) {
      const { success } = await deleteUser(id)
      if (success) {
        this.users = this.users.filter((user) => user.id !== id)
      }
    },
    async detailUser(id) {
      const { result } = await getDetailUser(id)
      this.user = result
    },
    async addUser(user) {
      const { result } = await addUser(user)
      console.log(result)
    },
  },
})
