import { useQuery } from 'react-query'
import fetchQuote from './getQuete'

const FetchQuery = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: 'quote',
    queryFn: () => fetchQuote(),
  })
  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}

      {data && (
        <div>
          <h1>{data[0].title}</h1>
          <p>{data[0].body}</p>
        </div>
      )}
    </div>
  )
}

export default FetchQuery
