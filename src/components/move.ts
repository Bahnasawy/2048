type Move = {
  cells: Array<Array<number>>
  horizontal: boolean
  positive: boolean
}

const move = ({ cells, horizontal, positive }: Move) => {
  let arr = [...cells]
  if (horizontal) {
    if (!positive) {
      for (let i = 0; i < 4; i++) {
        for (let j = 3; j >= 0; j--) {
          let done = false
          while (!done) {}
        }
      }
    }
  }
}

export default move
