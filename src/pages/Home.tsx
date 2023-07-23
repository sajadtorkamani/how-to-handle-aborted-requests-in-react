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
    <>
      <h1>How to handle aborted requests in React</h1>

      <p>
        If a query is cancelled for whatever reason (usually because a component
        unmounts or network connection is lost), it's probably safe to silently
        ignore it. We don't need to render a fallback UI showing a message like
        "Oops, something went wrong".
      </p>

      <p>
        That sort of fallback UI makes sense only for scenarios like a 500 API
        error or if there's a runtime JavaScript error.
      </p>

      <div className="max-w-[200px] mb-7">
        <Button
          className="block mb-4 text-green-700 border-green-700"
          isProcessing={isProcessing}
          onClick={() => {
            createPostMutation.mutate()
          }}
        >
          Make request
        </Button>

        <Button
          className="text-red-700 border-red-700"
          onClick={() => {
            if (!isProcessing) {
              alert("Click the 'Make request' button first")
              return
            }
            controller.abort()
          }}
        >
          Cancel request
        </Button>
      </div>

      <p>
        Open up your console and you'll see that even though a{' '}
        <code>CanceledError</code> is thrown when you cancel an in-progress
        request, you can safely ignore the error in your{' '}
        <a
          href="https://github.com/sajadtorkamani/how-to-handle-aborted-requests-in-react/blob/master/src/components/ErrorBoundary.tsx#L21"
          target="_blank"
          rel="noreferrer"
        >
          ErrorBoundary component
        </a>
        .
      </p>

      <p>
        This example uses Axios but the concept should be transferable to the{' '}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"
          target="_blank"
          rel="noreferrer"
        >
          Fetch API
        </a>{' '}
        or most data-fetching libraries.
      </p>
    </>
  )
}

export default Home
