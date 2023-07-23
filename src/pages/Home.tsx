import React from 'react'
import { useCreatePostMutation } from '../hooks/useCreatePostMutation.tsx'

const Home: React.FC = () => {
  const createPostMutation = useCreatePostMutation()

  const isProcessing = createPostMutation.isLoading

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Home</h1>

      <button
        className="border border-black px-3 py-2"
        onClick={() => {
          createPostMutation.mutate()
        }}
      >
        {isProcessing ? 'Processing...' : 'Make request'}
      </button>
    </>
  )
}

export default Home
