import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import Home from './pages/Home.tsx'
import Layout from './components/Layout.tsx'
import ErrorBoundary from './components/ErrorBoundary.tsx'

const queryClient = new QueryClient()

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Home />
        </Layout>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ErrorBoundary>
  )
}

export default App
