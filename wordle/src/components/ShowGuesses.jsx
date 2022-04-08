import { useState } from 'react';

const GuessesList = (props) => {
	return (
		<ul>
			{props.guesses.map((guess) => {
				return <li key={guess}>{guess}</li>;
			})}
		</ul>
	);
};

export default GuessesList;
