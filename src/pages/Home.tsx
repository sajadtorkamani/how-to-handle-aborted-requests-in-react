import React from 'react'
import { useCreatePostMutation } from '../hooks/useCreatePostMutation.tsx'
import Button from '../components/Button.tsx'

const Home: React.FC = () => {
  const createPostMutation = useCreatePostMutation()

  const isProcessing = createPostMutation.isLoading

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Home</h1>

      <Button
        isProcessing={isProcessing}
        onClick={() => {
          createPostMutation.mutate()
        }}
      >
        Make request
      </Button>
    </>
  )
}

export default Home
