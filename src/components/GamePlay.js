import React, { useState } from 'react';
import './GamePlay.css';
import Button from './Button';

const GamePlay = () => {
  const [userAnswer, setUserAnswer] = useState("No answer yet");
  const [computerAnswer, setComputerAnswer] = useState("No answer yet");
  const [winner, setWinner] = useState("Pick an answer to play");
  const choices = ["Rock", "Paper", "Scissors"];

  const handleChoice = (userAnswer) => {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    setUserAnswer(userAnswer);
    setComputerAnswer(computerChoice);
    determineWinner(userAnswer, computerChoice);
  };

  const determineWinner = (userAnswer, computerAnswer) => {
    if (userAnswer === computerAnswer) {
      setWinner("It's a draw!");
    } else if ( (userAnswer === "Rock" && computerAnswer === "Scissors") || (userAnswer === "Paper" && computerAnswer === "Rock") || (userAnswer === "Scissors" && computerAnswer === "Paper")) {
      setWinner("You win!");
    } else {
      setWinner("You lose!");
    }
  };

  return (
    <div className="container">
      <div className="buttons">
        <Button onClick={() => handleChoice("Rock")}>Rock</Button>
        <Button onClick={() => handleChoice("Paper")}>Paper</Button>
        <Button onClick={() => handleChoice("Scissors")}>Scissors</Button>
      </div>
      <h2>{winner}</h2>
      <h2>You chose: {userAnswer}</h2>
      <h2>Computer chose: {computerAnswer}</h2>

    </div>
  );
};

export default GamePlay;