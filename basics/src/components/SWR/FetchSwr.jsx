import useSWR from 'swr'

const fetcher = async (...args) => {
  const response = await fetch(...args)
  return response.json()
}

const FetchSwr = () => {
  const { data: quote } = useSWR('https://api.quotable.io/random', fetcher)
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

export default FetchSwr
