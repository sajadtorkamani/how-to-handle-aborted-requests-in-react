import React from 'react'
import { useQuery } from 'react-query'

const Home: React.FC = () => {
  const shouldRejectPromise = window.location.search.includes('reject=true')

  const {
    isLoading,
    isError,
    data: books,
  } = useQuery(['books'], (): Promise<string[]> => {
    return new Promise((resolve, reject) => {
      console.count('Running query')

      if (shouldRejectPromise) {
        reject(new Error('Something went wrong'))
        return
      }

      resolve(['War and Peace', 'Frankenstein'])
    })
  })

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError || !books) {
    throw 'Failed to load books'
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
