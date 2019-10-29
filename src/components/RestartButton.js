import React from 'react';

function RestartButton({ setBoardContent }) {
  return (
    <button onClick={() => {
      // reset the board's state to be an array of 9 empty strings
      setBoardContent([
        '', '', '',
        '', '', '',
        '', '', ''
      ])
    }}>
      Restart?
    </button>
  )
}

export default RestartButton;