import React, {useState} from "react"

type ButtonsProps = {
  text?: string,
  children?: string,
}

export function Button (props: ButtonsProps) {
  
  const [couter, setCounter] = useState(0)
  
  function incrementar () {
    setCounter(couter + 1)
  }


  return (
    <button onClick={incrementar}>{couter}</button>
  )
}
