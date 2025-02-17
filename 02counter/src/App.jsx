import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0)

  // let counter = 5

  const addValue = () => {
    // counter = counter + 1
    setCounter(counter + 1)
    // it will not work by adding that much 1, it will increase one time only. See the notes.md
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    console.log(counter)
  }

  const removeValue = () => {
    // counter = counter - 1
    if (counter > 0) {
      setCounter(counter - 1)
      console.log(counter)
    }
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
