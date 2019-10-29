import React from 'react';
import Cell from './Cell'

function Board() {
  const [boardContent, setBoardContent] = React.useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ])

  return (
    <>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 100px)',
        gridTemplateRows: 'repeat(3, 100px)'
      }}>
        <Cell content={boardContent[0][0]} />
        <Cell content={boardContent[0][1]} />
        <Cell content={boardContent[0][2]} />
        <Cell content={boardContent[1][0]} />
        <Cell content={boardContent[1][1]} />
        <Cell content={boardContent[1][2]} />
        <Cell content={boardContent[2][0]} />
        <Cell content={boardContent[2][1]} />
        <Cell content={boardContent[2][2]} />
      </div>
      <div
        onClick={() => {
          // assume we're updating row index 0 and column index 0
          const copyOfBoard = [
            [...boardContent[0]],
            [...boardContent[1]],
            [...boardContent[2]]
          ]

          copyOfBoard[0][0] = 'X'

          setBoardContent(copyOfBoard)
        }}
      >
        Demonstration of update function
      </div>
    </>
  )
}

export default Board;