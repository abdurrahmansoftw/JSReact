import useSWR from 'swr'

const fetcher = async (...args) => {
  const response = await fetch(...args)
  const data = response.json()
  return data
}

const FetchSwr = () => {
  const {
    data: quote,
    isLoading,
    error,
  } = useSWR('https://api.quotable.io/random', fetcher, { suspense: true })
  return (
    <div>
      <h1>Get Quotes using Fetch API</h1>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>Error</h3>}
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

export default FetchSwr
