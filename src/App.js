import React from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/Board'
import Message from './components/Message'
import RestartButton from './components/RestartButton';

function App() {
  const [boardContent, setBoardContent] = React.useState([
    '', '', '',
    '', '', '',
    '', '', ''
  ])

  const numberOfTurnsPlayed = boardContent.reduce(
    (acc, cellContent) => {
      // if (cellContent === '') {
      //   return acc
      // } else {
      //   return acc + 1
      // }
      return cellContent === '' ? acc : acc + 1
    },
    0)

  const characterToPlay = numberOfTurnsPlayed % 2
    ? 'O'
    : 'X'

  const updateBoardAtIndex = (index) => {
    const copyOfBoard = [...boardContent]
    copyOfBoard[index] = characterToPlay
    setBoardContent(copyOfBoard)
  }

  return (
    <>
      <RestartButton setBoardContent={setBoardContent} />
      <Board
        boardContent={boardContent}
        updateBoardAtIndex={updateBoardAtIndex}
      />
      <Message />
    </>
  );
}

export default App;
