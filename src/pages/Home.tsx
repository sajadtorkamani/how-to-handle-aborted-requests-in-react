import React, { useRef } from 'react'
import Button from '../components/Button.tsx'
import { useMutation } from 'react-query'
import { apiService } from '../lib/apiService.ts'

const Home: React.FC = () => {
  const controllerRef = useRef(new AbortController())
  const controller = controllerRef.current
  const signal = controller.signal

  const createPostMutation = useMutation(async () => {
    const response = await apiService.post('/api/posts', {}, { signal })

    return response.data
  })

  const isProcessing = createPostMutation.isLoading

  if (createPostMutation.error) {
    throw createPostMutation.error
  }

  return (
    <div className="max-w-[200px] mx-auto">
      <Button
        className="block mb-10 text-green-700 border-green-700"
        isProcessing={isProcessing}
        onClick={() => {
          createPostMutation.mutate()
        }}
      >
        Make request
      </Button>

      <Button
        className="text-red-700 border-red-700"
        onClick={() => controller.abort()}
      >
        Cancel request
      </Button>
    </div>
  )
}

export default Home
