import { createContext, useState } from "react"

export const counterContextObj = createContext()

function ContextProvider({ children }) {
  const [counter, setCounter] = useState(0)

  const increment = () => setCounter(prev => prev + 1)
  const decrement = () => setCounter(prev => prev - 1)
  const reset = () => setCounter(0)
  const addTen = () => setCounter(prev => prev + 10)
  const subTen = () => setCounter(prev => prev - 10)

  return (
    <counterContextObj.Provider value={{ counter, increment, decrement, reset, addTen, subTen }}>
      {children}
    </counterContextObj.Provider>
  )
}

export default ContextProvider
