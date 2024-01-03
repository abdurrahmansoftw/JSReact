import { useQuery } from 'react-query'

const FetchQuery = () => {
  const { data: quote } = useQuery({
    queryKey: 'quote',
    queryFn: async () => {
      const response = await fetch('https://api.quotable.io/random')
      const data = await response.json()
      return data
    },
  })
  return (
    <div>
      <h1>Get Quotes using Fetch API</h1>
      <div>
        {quote && (
          <div>
            <h1>content: {quote.content}</h1>
            <h3>author: {quote.author}</h3>
            <h4>quote Length: {quote.length}</h4>
          </div>
        )}
      </div>
    </div>
  )
}

export default FetchQuery
