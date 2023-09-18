import { Box, Button, Typography } from "@mui/material"
import Square from "./Component/Square/Square"
import { useState } from "react"
import { flushSync } from "react-dom"

function App() {
  const [state, setState] = useState(Array(9).fill(null))
  const [isTurn, setIsTurn] = useState(true)


  const handleClick = (index) => {
    if (state[index]) {
      return
    }
    const rcds = [...state]
    rcds[index] = isTurn ? "X" : "0"
    setState(rcds)
    setIsTurn(!isTurn)
  }

  const checkWinner = () => {
    const winnerDeclare = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    for (let checkWinner of winnerDeclare) {
      const [a, b, c] = checkWinner
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a]
      }
    }
    return false
  }

const handleReset=()=>{
  setState(Array(9).fill(null))
}

  const isWinner=checkWinner();
  console.log(isWinner);

  return (
    <Box className="flex flex-col items-center pt-10 h-[100vh] bg-yellow-200 rounded-lg w-[100%]">
     {
      isWinner ? (
      <>
      {/* Player <b>{isWinner ==false ?""}</b> Won The Game ! */}
      {
        isWinner == false ?("Game Tied"):(<>Player <b>{isWinner}</b>Won The Game !</>)
      }
      <Button onClick={handleReset} variant="contained">Play Again</Button>
      </>):(
        <>
        <Typography>Player <b>{isTurn ?"X":"0"}</b> please move</Typography>
        <Box className="flex items-center">
        <Square value={state[0]} onclick={() => handleClick(0)} />
        <Square value={state[1]} onclick={() => handleClick(1)} />
        <Square value={state[2]} onclick={() => handleClick(2)} />
      </Box>
      <Box className="flex items-center">
        <Square value={state[3]} onclick={() => handleClick(3)} />
        <Square value={state[4]} onclick={() => handleClick(4)} />
        <Square value={state[5]} onclick={() => handleClick(5)} />
      </Box>
      <Box className="flex  items-center">
        <Square value={state[6]} onclick={() => handleClick(6)} />
        <Square value={state[7]} onclick={() => handleClick(7)} />
        <Square value={state[8]} onclick={() => handleClick(8)} />
      </Box>
        </>
      )
     }
    </Box>
  )
}

export default App
