import { useMutation } from 'react-query'
import { apiService } from '../lib/apiService.ts'

export function useCreatePostMutation() {
  return useMutation(async () => {
    const response = await apiService.post('/api/notes')

    return response.data
  })
}
