import { useState } from "react"
import './Counter.scss';

export const Counter = () => {

    const [count,SetCount] = useState(0)

    const increment = () => {
        SetCount(count => count  + 1)
    }
     const decrement = () => {
        SetCount(count => count  - 1)
    }


  return (
    <div>
    <h1>{count}</h1>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </div>
  )
}
