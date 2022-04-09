import { useState } from 'react';

const GuessesList = ({ guesses }) => {
	return (
		<table>
			<tbody>
				{guesses.map(({ guess }, i) => {
					return (
						<tr key={guess[i]}>
							<td className={guess[0][1]}>{guess[0][0]}</td>
							<td className={guess[1][1]}>{guess[1][0]}</td>
							<td className={guess[2][1]}>{guess[2][0]}</td>
							<td className={guess[3][1]}>{guess[3][0]}</td>
							<td className={guess[4][1]}>{guess[4][0]}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default GuessesList;
