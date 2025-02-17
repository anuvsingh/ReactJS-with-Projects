import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // To copy input part
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*_-+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  // So if we click on any dependencies so after clicking useEffect again re-render the passwordGenerator again and again run it.
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className="w-full max-w-3xl mx-auto shadow-lg rounded-2xl px-6 py-10 my-10 text-yellow-50 bg-gray-900">
        <h1 className="text-white text-center text-2xl font-semibold mb-6">Password Generator</h1>
        <div className="flex shadow-md rounded-lg overflow-hidden mb-6">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-4 bg-gray-800 text-yellow-50 placeholder-gray-400"
            placeholder="Your Generated Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-600 hover:bg-blue-700 text-yellow-50 px-4 py-2 font-medium transition-all"
          >
            Copy
          </button>
        </div>

        <div className="flex flex-col gap-y-4 text-sm">
          <div className="flex items-center justify-between gap-x-4">
            <label className="text-yellow-50 font-medium">Length: </label>
            <div className="flex items-center gap-x-2 w-full">
              <input
                type="range"
                min={6}
                max={100}
                value={length}
                className="cursor-pointer flex-grow accent-blue-600"
                onChange={(e) => setLength(e.target.value)}
              />
              <span className="bg-gray-800 text-yellow-50 px-2 py-1 rounded-lg text-center">
                {length}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-x-3">
            <input
              type="checkbox"
              id="numberInput"
              className="cursor-pointer w-4 h-4 accent-blue-600"
              defaultChecked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label htmlFor="numberInput" className="text-yellow-50">
              Include Numbers
            </label>
          </div>

          <div className="flex items-center gap-x-3">
            <input
              type="checkbox"
              id="characterInput"
              className="cursor-pointer w-4 h-4 accent-blue-600"
              defaultChecked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label htmlFor="characterInput" className="text-yellow-50">
              Include Special Characters
            </label>
          </div>
        </div>
      </div>
    </>

  )
}

export default App
