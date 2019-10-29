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
        <Cell
          index={0}
          content={boardContent[0]}
          updateForGivenIndex={updateBoardAtIndex}
        />
        <Cell index={1} content={boardContent[1]} updateForGivenIndex={updateBoardAtIndex} />
        <Cell index={2} content={boardContent[2]} updateForGivenIndex={updateBoardAtIndex} />
        <Cell index={3} content={boardContent[3]} updateForGivenIndex={updateBoardAtIndex} />
        <Cell index={4} content={boardContent[4]} updateForGivenIndex={updateBoardAtIndex} />
        <Cell index={5} content={boardContent[5]} updateForGivenIndex={updateBoardAtIndex} />
        <Cell index={6} content={boardContent[6]} updateForGivenIndex={updateBoardAtIndex} />
        <Cell index={7} content={boardContent[7]} updateForGivenIndex={updateBoardAtIndex} />
        <Cell index={8} content={boardContent[8]} updateForGivenIndex={updateBoardAtIndex} />
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