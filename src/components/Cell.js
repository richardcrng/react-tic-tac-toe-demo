import React from 'react';

function Cell({ content }) {
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
      {content}
    </button>
  )
}

export default Cell;