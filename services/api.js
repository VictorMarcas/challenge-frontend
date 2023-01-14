import { useFetchPlugin } from '@/composables/useFetch'

export const getUsers = async () => {
  return await useFetchPlugin('/users')
}
