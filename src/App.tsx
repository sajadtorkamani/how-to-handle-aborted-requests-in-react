import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import Home from './pages/Home.tsx'
import Layout from './components/Layout.tsx'
import ErrorBoundary from './components/ErrorBoundary.tsx'

const queryClient = new QueryClient()

const App: React.FC = () => {
  return (
    <Layout>
      <ErrorBoundary>
        <QueryClientProvider client={queryClient}>
          <Home />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ErrorBoundary>
    </Layout>
  )
}

export default App
