import ShowGuesses from './ShowGuesses';
import AddGuess from './AddGuess';
import { useState } from 'react';

const Guess = () => {
  const [guesses, addGuess] = useState([]);

  return (
    <div>
      <ShowGuesses guesses={guesses}></ShowGuesses>
      <AddGuess addGuess={addGuess}></AddGuess>
    </div>
  );
};

export default Guess;
