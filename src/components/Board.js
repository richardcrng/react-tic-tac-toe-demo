import React from 'react';
import Cell from './Cell'

function Board({ boardContent, updateBoardAtIndex }) {
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
    </>
  )
}

export default Board;