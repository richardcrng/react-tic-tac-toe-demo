import React from 'react';
import Cell from './Cell'

function Board() {
  const [boardContent, setBoardContent] = React.useState([
    '', '', '',
    '', '', '',
    '', '', ''
  ])

  const updateBoardAtIndex = (index) => {
    const copyOfBoard = [...boardContent]
    copyOfBoard[index] = 'X'
    setBoardContent(copyOfBoard)
  }

  return (
    <>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 100px)',
        gridTemplateRows: 'repeat(3, 100px)'
      }}>
        {
          boardContent.map((cellContent, index) => {
            return (
              <Cell
                // have to give each element a unique key when using map
                key={index}

                content={cellContent}
                index={index}
                updateForGivenIndex={updateBoardAtIndex}
              />
            )
          })
        }
      </div>
      <div
        onClick={() => {
          const copyOfBoard = [...boardContent]
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