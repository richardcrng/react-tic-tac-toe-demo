import React from 'react';
import Cell from './Cell'

function Board() {
  const [boardContent, setBoardContent] = React.useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ])

  return (
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
  )
}

export default Board;