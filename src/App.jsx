import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Body from './Components/Body'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* // 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 */}
      <Header />
      <Body />
      <Footer />
    </>
  )
}

export default App
