import ShowGuesses from './ShowGuesses';
import AddGuess from './AddGuess';
import Restart from './Restart';
import { useState } from 'react';

const Guess = () => {
	const [guesses, setGuess] = useState([]);
	const answer = 'apple';

	return (
		<>
			<ShowGuesses guesses={guesses}></ShowGuesses>
			<AddGuess setGuess={setGuess} answer={answer}></AddGuess>
			<Restart setGuess={setGuess}></Restart>
		</>
	);
};

export default Guess;
