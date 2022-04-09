const GuessesList = ({ guesses }) => {
	console.log(guesses);
	return (
		<table>
			<tbody>
				{guesses.map(({ guess }, i) => {
					return (
						<tr key={guess[i]}>
							<td className={guess[0][1]}>
								<span>{guess[0][0]}</span>
							</td>
							<td className={guess[1][1]}>
								<span>{guess[1][0]}</span>
							</td>
							<td className={guess[2][1]}>
								<span>{guess[2][0]}</span>
							</td>
							<td className={guess[3][1]}>
								<span>{guess[3][0]}</span>
							</td>
							<td className={guess[4][1]}>
								<span>{guess[4][0]}</span>
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default GuessesList;
