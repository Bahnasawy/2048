import React from "react"
import move from "./move"

type Swap = {
  cells: Array<Array<number>>
  x1: number
  y1: number
  x2: number
  y2: number
}

const swap = ({ cells, x1, y1, x2, y2 }: Swap) => {
  let arr = [...cells]
  let temp = arr[x1][y1]
  arr[x1][y1] = arr[x2][y2]
  arr[x2][y2] = temp
  return arr
}

type Controls = { cells: Array<Array<number>>; event: React.KeyboardEvent }

const controls = ({ cells, event }: Controls) => {
  switch (event.key) {
    case "ArrowUp":
  }
}
