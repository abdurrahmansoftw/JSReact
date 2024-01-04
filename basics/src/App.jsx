import { Suspense } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import FetchQuery from './components/FetchQuery/FetchQuery'

const App = () => {
  const queryClientt = new QueryClient({
    defaultOptions: {
      queries: {
        suspense: true,
      },
    },
  })
  return (
    <QueryClientProvider client={queryClientt}>
      <Suspense fallback={<div>Loading...</div>}>
        <FetchQuery />
      </Suspense>
    </QueryClientProvider>
  )
}

export default App
