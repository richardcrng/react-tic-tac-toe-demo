import React from 'react';

function Cell({ content, index, updateForGivenIndex }) {
    // kebab-case
    // snake_case
    // camelCase
    // SCREAMING_SNAKE_CASE
    // SCREAMING-KEBAB-CASE

  return (
    <button
      onClick={() => {
        if (content === '') {
          updateForGivenIndex(index)
        }
      }}
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