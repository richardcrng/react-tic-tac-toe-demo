import React from 'react';

function Message({ winningPlayer, isGameOver }) {
  if (!isGameOver) {
    return null
  }

  if (winningPlayer) {
    return <p>The winner is {winningPlayer}!</p>
  } else {
    return <p>It's a draw!</p>
  }
}

export default Message;