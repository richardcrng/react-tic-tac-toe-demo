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

  const hasSomebodyWon = checkForVictory(boardContent)
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

const WIN_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

const checkForVictory = (board) => (
  WIN_COMBINATIONS.some(([firstIndex, secondIndex, thirdIndex]) => (
    board[firstIndex] === board[secondIndex] && board[secondIndex] === board[thirdIndex] && board[firstIndex] !== ''
  )) 
)

export default App;
