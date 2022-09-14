import React, { useState } from 'react'
import boxes from "./boxes";
import "./styles.css";
import Box from './Box'

const App = () => {
  // Initialize state with the default value of the array pulled from boxes.js
  const [squares, setSquares] = useState(boxes);

  function toggle(id) {
    setSquares(prevSquares => {
      return prevSquares.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square
      })
    })
  }

  // Map over that state array and display each one  as an empty square with black border
  const squareElements = squares.map((square) => (
    <Box
      key={square.id}
      on={square.on}
      toggle={() => toggle(square.id)}
    />
  ));

  return (
    <main>
      <h1>
        props and state practice
      </h1>
      {squareElements}
    </main>
  );
}

export default App