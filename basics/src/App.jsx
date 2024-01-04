import { QueryClient, QueryClientProvider } from 'react-query'
import FetchQuery from './components/FetchQuery/FetchQuery'

const App = () => {
  const queryClientt = new QueryClient()
  return (
    <QueryClientProvider client={queryClientt}>
      <FetchQuery />
      <FetchQuery />
    </QueryClientProvider>
  )
}

export default App
