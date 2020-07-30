import React, { useState } from "react"
import Cell from "../components/cell"

let arr: Array<Array<number>> = new Array(4).fill(Array(4).fill(0))

const index = () => {
  const [cells, setCells] = useState([...arr])

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col">
        {cells.map((row, rIdx) => (
          <div className="flex flex-row" key={rIdx}>
            {row.map((value, cIdx) => (
              <div key={`(${rIdx}, ${cIdx})`}>
                <Cell val={value} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default index
