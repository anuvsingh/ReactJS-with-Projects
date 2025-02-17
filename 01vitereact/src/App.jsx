import Chai from "./chai"

function App() {
  const username = "chai aur code"

  // Humlog ek he element return kr skte hai react mein but ek element ke andr toh bahut saare element ho skte hai.
  // Ek empty tag(<></>) ko react mein Fragment kaaha jaata hai.
  return (
    <>
      <Chai />
      {/* We use curly braces to print variables */}
      {/* We call it evaluation expression */}
      <h1> Chai aur React {username}</h1>
      <p>I Love Chai and Java</p>
    </>
  )
}

export default App
