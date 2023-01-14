import { defineStore } from 'pinia'
import { getUsers } from '@/services/api'

export const useUsersStore = defineStore('users', {
  state: () => ({
    users: [],
  }),
  actions: {
    async fetchUsers() {
      const { result } = await getUsers()
      this.users = result
    },
  },
})
