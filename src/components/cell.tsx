import React, { useState } from "react"
import colors from "./colors"

type Cell = { val: number }

const cell = ({ val }: Cell) => {
  const [value, setValue]: [number, Function] = useState(val)
  return (
    <div
      className={
        colors[value] +
        " flex items-center justify-center w-48 h-48 border-8 border-gray-800"
      }
    >
      <p className="text-6xl font-bold">{value === 0 ? "" : value}</p>
    </div>
  )
}

export default cell
