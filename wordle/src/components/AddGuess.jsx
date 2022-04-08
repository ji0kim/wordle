import { useState } from 'react';

const AddGuess = ({ addGuess, answer }) => {
	const [newGuess, setNewGuess] = useState('');
	const [disable, setDisable] = useState(true);
	const [errMessage, setErrMessage] = useState('');
	const [total, setTotal] = useState(6);

	const checkAnswer = (newGuessTry) => {
		if (newGuessTry === answer) {
			setErrMessage('You win!');
		} else {
			const splitAnswer = answer.split('');
			const splitAnswerSpliceable = answer.split('');
			const splitNewGuessTry = newGuessTry.split('');
			// {a:1}{p: 3}
			const compare = splitNewGuessTry.map((char, i) => {
				if (char === splitAnswer[i]) {
					splitAnswerSpliceable.splice(splitAnswerSpliceable.indexOf(char), 1);
					return 'matched';
				} else if (splitAnswerSpliceable.includes(char)) {
					return 'included';
				} else {
					return 'notIncluded';
				}
			});

			setTotal((total) => {
				return --total;
			});
		}
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		checkAnswer(newGuess);
		addGuess((guessList) => {
			return [...guessList, newGuess];
		});
		setNewGuess('');
	};
	const regex = /([a-z])/;

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor="new-guess">Guess</label>
				<input
					id="new-guess"
					name="newguess"
					type="text"
					onChange={(event) => {
						const lastChar = event.target.value[event.target.value.length - 1];
						if (event.target.value.length === 5) {
							setDisable(false);
						} else {
							setDisable(true);
						}
						if (regex.test(lastChar)) {
							setNewGuess(event.target.value);
						} else {
							// Need to handle incorrect input!
							console.log('Wrong');
						}
					}}
					value={newGuess}
				/>
				<button type="submit" id="guess-btn" disabled={disable}>
					Guess
				</button>
			</form>
			<p>
				{errMessage}
				{total + ' Guesses remaining'}
			</p>
		</div>
	);
};

export default AddGuess;
