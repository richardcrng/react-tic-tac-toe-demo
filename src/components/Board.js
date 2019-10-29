import React from 'react';
import Cell from './Cell'

function Board() {
  const [boardContent, setBoardContent] = React.useState([
    '', '', '',
    '', '', '',
    '', '', ''
  ])

  return (
    <>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 100px)',
        gridTemplateRows: 'repeat(3, 100px)'
      }}>
        <Cell content={boardContent[0]} />
        <Cell content={boardContent[1]} />
        <Cell content={boardContent[2]} />
        <Cell content={boardContent[3]} />
        <Cell content={boardContent[4]} />
        <Cell content={boardContent[5]} />
        <Cell content={boardContent[6]} />
        <Cell content={boardContent[7]} />
        <Cell content={boardContent[8]} />
      </div>
      <div
        onClick={() => {
          // assume we're updating row index 0 and column index 0
          const copyOfBoard = [...boardContent]
          // const copyOfBoard = [
          //   [...boardContent[0]],
          //   [...boardContent[1]],
          //   [...boardContent[2]]
          // ]

          copyOfBoard[0] = 'X'

          setBoardContent(copyOfBoard)
        }}
      >
        Demonstration of update function
      </div>
    </>
  )
}

export default Board;