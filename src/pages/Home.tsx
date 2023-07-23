import React from 'react'
import { useQuery } from 'react-query'
import { apiService } from '../lib/apiService.ts'

const Home: React.FC = () => {
  const shouldRejectPromise = window.location.search.includes('reject=true')

  const {
    isLoading,
    isError,
    error,
    data: books,
  } = useQuery(
    ['books'],
    (): Promise<string[]> => {
      console.count('Running query')

      // Proxy the request using a HTTP proxy client
      return apiService.get('/books')

      // return new Promise((resolve, reject) => {
      //   console.count('Running query')
      //
      //   // Create a little proxy server
      //   return apiService.get('/books')
      //   // if (shouldRejectPromise) {
      //   //   reject(new Error('Something went wrong'))
      //   //   return
      //   // }
      //   //
      //   // resolve(['War and Peace', 'Frankenstein'])
      // })
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
