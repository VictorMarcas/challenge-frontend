import type { FetchOptions } from 'ohmyfetch'

export const useFetchPlugin = (path: string, opts?: FetchOptions) => {
  const {
    public: { apiBaseUrl },
  } = useRuntimeConfig()
  return $fetch(path, { baseURL: apiBaseUrl, ...(opts && { ...opts }) })
}
