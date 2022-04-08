import { useState } from 'react';

const GuessesList = ({ guesses }) => {
	console.log(guesses);
	return (
		<table>
			<tbody>
				{guesses.map(({ guess }, i) => {
					return (
						<tr key={guess[i]}>
							<td>{guess[0][0]}</td>
							<td>{guess[1][0]}</td>
							<td>{guess[2][0]}</td>
							<td>{guess[3][0]}</td>
							<td>{guess[4][0]}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default GuessesList;
