import React from 'react'
import { useQuery } from 'react-query'
import { apiService } from '../lib/apiService.ts'

const Home: React.FC = () => {
  const {
    isLoading,
    isError,
    error,
    data: books,
  } = useQuery(
    ['books'],
    async () => {
      const response = await apiService.get<string[]>('/books-error')
      return response.data
    },
    {
      retry: false,
    },
  )

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError || !books) {
    throw error
  }

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Books</h1>
      {books.map((book, index) => (
        <p key={index}>{book}</p>
      ))}
    </>
  )
}

export default Home
