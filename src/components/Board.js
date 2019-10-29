import React from 'react';
import Cell from './Cell'

function Board() {
  const boardContent = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ]

  return (
    <div>
      <div>
        <Cell content={boardContent[0][0]} />
        <Cell content={boardContent[0][1]} />
        <Cell content={boardContent[0][2]} />
      </div>
      <div>
        <Cell content={boardContent[1][0]} />
        <Cell content={boardContent[1][1]} />
        <Cell content={boardContent[1][2]} />
      </div>
      <div>
        <Cell content={boardContent[2][0]} />
        <Cell content={boardContent[2][1]} />
        <Cell content={boardContent[2][2]} />
      </div>
    </div>
  )
}

export default Board;