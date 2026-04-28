import React from 'react';

function GuessInput({ onSubmitGuess, isEnabled }) {
  const [guess, setGuess] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();

    /* if (guess.length !== 5) {
      window.alert("Please enter exactly 5 characters. ❤️");
      return;
    } */

    onSubmitGuess(guess);
    setGuess('');
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
        required
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="Guess must be exactly 5 characters"
        disabled={!isEnabled} 
      />
    </form>
  )
}

export default GuessInput;
