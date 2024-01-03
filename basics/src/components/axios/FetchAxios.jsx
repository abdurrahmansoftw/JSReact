import axios from 'axios'
import { useEffect, useState } from 'react'

const FetchAxios = () => {
  const [quote, setQuote] = useState(null)

  useEffect(() => {
    const getQuote = async () => {
      const response = await axios.get('https://api.quotable.io/random')
      const data = await response.data
      setQuote(data)
    }
    getQuote()
  }, [])
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

export default FetchAxios
