import { useState } from 'react';

const AddGuess = ({ setGuess, answer }) => {
	const [newGuess, setNewGuess] = useState('');
	// const [disable, setDisable] = useState(true);
	const [errMessage, setErrMessage] = useState('');
	const [total, setTotal] = useState(6);

	const checkAnswer = (newGuessTry) => {
		if (newGuessTry !== answer) {
			const splitAnswer = answer.split('');
			const splitNewGuessTry = newGuessTry.split('');
			const compare = splitNewGuessTry.map((char, i) => {
				if (char === answer[i]) {
					splitAnswer.splice(splitAnswer.indexOf(char), 1);
					return [char, 'matched'];
				} else if (splitAnswer.includes(char)) {
					return [char, 'included'];
				} else {
					return [char, 'not-included'];
				}
			});
			setTotal((total) => {
				return total - 1;
			});
			return compare;
		} else {
			setErrMessage('You win!');
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setGuess((guessList) => {
			return [...guessList, checkAnswer(newGuess)];
		});
		setNewGuess('');
	};

	const isValidGuess = (event) => {
		const regex = /([a-zA-Z])/;
		const value = event.target.value.toUpperCase();
		const lastChar = value[value.length - 1];
		if (regex.test(lastChar)) {
			setNewGuess(value);
		} else {
			// Need to handle incorrect input!
			console.log('Wrong');
		}
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input id="new-guess" name="newguess" type="text" onChange={(event) => isValidGuess(event)} value={newGuess} />
				<button type="submit" id="guess-btn" disabled={newGuess.length !== 5}>
					Guess
				</button>
			</form>
			<p>
				{errMessage}
				{total + ' Guesses remaining'}
			</p>
		</>
	);
};

export default AddGuess;
