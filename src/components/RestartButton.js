import React from 'react';

function RestartButton({ setBoardContent, show }) {
  if (show) {
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
  } else {
    return null
  }
}

export default RestartButton;