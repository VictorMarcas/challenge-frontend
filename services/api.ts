import { useFetchPlugin } from '@/composables/useFetch'

export const getUsers = async () => {
  return await useFetchPlugin('/users')
}

export const deleteUser = async (id: string) => {
  return await useFetchPlugin(`/users/delete/${id}`, { method: 'DELETE' })
}

export const getDetailUser = async (id: string) => {
  return await useFetchPlugin(`/users/${id}`)
}

export const addUser = async (data: User) => {
  return await useFetchPlugin('/users/add', {
    method: 'POST',
    body: JSON.stringify(data),
  })
}
