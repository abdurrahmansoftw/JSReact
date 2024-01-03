import axios from 'axios'
import { useEffect, useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import FetchQuery from './components/FetchQuery/FetchQuery'

const App = () => {
  const [quote, setQuote] = useState(null)
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        suspense: true,
      },
    },
  })

  useEffect(() => {
    const getQuote = async () => {
      const response = await axios.get('https://api.quotable.io/random')
      const data = await response.data
      setQuote(data)
    }
    getQuote()
  }, [])
  return (
    <QueryClientProvider client={queryClient}>
      <FetchQuery />
      <FetchQuery />
    </QueryClientProvider>
  )
}

export default App
