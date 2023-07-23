import { useQuery } from 'react-query'
import { apiService } from '../lib/apiService.ts'

export function usePostsQuery() {
  return useQuery(
    ['posts'],
    async () => {
      const response = await apiService.get<string[]>('/posts')
      return response.data
    },
    {
      retry: false,
    },
  )
}
