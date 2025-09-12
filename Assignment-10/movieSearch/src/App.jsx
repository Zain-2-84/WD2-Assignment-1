import { useState } from 'react'
import MovieSearch from './components/MovieSearch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MovieSearch/>
    </>
  )
}

export default App
