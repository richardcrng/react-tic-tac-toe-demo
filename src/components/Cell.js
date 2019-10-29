import React from 'react';

function Cell({ boardContent }) {
    // kebab-case
    // snake_case
    // camelCase
    // SCREAMING_SNAKE_CASE
    // SCREAMING-KEBAB-CASE

  return (
    <button
      style={{
        backgroundColor: 'light blue',
        height: '100px',
        width: '100px'
      }}
    >
      {boardContent}
    </button>
  )
}

export default Cell;