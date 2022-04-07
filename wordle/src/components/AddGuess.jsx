import { useState } from 'react';

const AddGuess = ({ addGuess }) => {
	const [newGuess, setNewGuess] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		addGuess((guessList) => {
			return [...guessList, newGuess];
		});
		setNewGuess('');
	};
	const isValid = (input) => {
		const regex = /[a-zA-Z]{5}/;
		return !regex ? true : false;
		// document.getElementById("guess-btn").disabled = true;
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Guess
				<input
					value={newGuess}
					onChange={(event) => {
						setNewGuess(event.target.value);
						isValid(event.target.value);
					}}
				/>
			</label>
			<button disabled={!newGuess} type="submit" id="guess-btn">
				Guess
			</button>
		</form>
	);
};
export default AddGuess;
