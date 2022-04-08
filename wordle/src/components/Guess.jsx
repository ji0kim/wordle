import ShowGuesses from './ShowGuesses';
import AddGuess from './AddGuess';
import { useState } from 'react';

const Guess = () => {
  const [guesses, addGuess] = useState([]);
  const answer = 'apple';



  return (
		<div>
			<ShowGuesses guesses={guesses}></ShowGuesses>
			<AddGuess addGuess={addGuess} answer={answer}></AddGuess>
		</div>
	);
};

export default Guess;
