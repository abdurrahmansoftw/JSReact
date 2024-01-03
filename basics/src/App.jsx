import FetchSwr from './components/SWR/FetchSwr'

const App = () => {
  return (
    <suspense
      fallback={
        <div>
          <h1>Loading...</h1>
        </div>
      }>
      <FetchSwr />
    </suspense>
  )
}

export default App
