import { useState } from 'react';

const ShoppingList = (props) => {
	return (
		<ul>
			{props.guesses.map((guess) => {
				console.log(guess);
				return <li key={guess}>{guess}</li>;
			})}
		</ul>
	);
};

export default ShoppingList;
