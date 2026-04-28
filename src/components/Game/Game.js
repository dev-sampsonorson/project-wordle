import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import { checkGuess } from '../../game-helpers';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import WonBanner from '../WonBanner/WonBanner';
import LostBanner from '../LostBanner/LostBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  // running | won | lost
  const [gameStatus, setGameStatus] = React.useState('running');

  function handleSubmitGuess(newGuess) {
    if (guesses.length >= NUM_OF_GUESSES_ALLOWED)
      return;

    const checkedGuess = checkGuess(newGuess, answer);
    const nextGuesses = [...guesses, checkedGuess];

    setGuesses(nextGuesses);

    if (newGuess.toUpperCase() === answer) {
      setGameStatus('won');
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  }

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput onSubmitGuess={handleSubmitGuess} isEnabled={gameStatus === 'running'} />
      {/* {
        gameStatus === 'won' ? (
          <WonBanner numOfGuesses={guesses.length} />
        ) : gameStatus === 'lost' && (
          <LostBanner answer={answer} />
        )        
      } */}
      {gameStatus === 'won' && <WonBanner numOfGuesses={guesses.length} />}
      {gameStatus === 'lost' && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
