import { useState } from 'react';

const AddGuess = ({ addGuess }) => {
  const [newGuess, setNewGuess] = useState('');
  const [disable, setDisable] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    addGuess((guessList) => {
      return [...guessList, newGuess];
    });
    setNewGuess('');
  };
  // const isValid = (input) => {
  const regex = /([a-z])/;

  // 	// document.getElementById("guess-btn").disabled = true;
  // };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='new-guess'>Guess</label>
        <input
          id='new-guess'
          name='newguess'
          type='text'
          onChange={(event) => {
            const lastChar = event.target.value[event.target.value.length - 1];
            if (event.target.value.length === 5) {
              console.log('5 chars');
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
            // isValid(event.target.value);
          }}
          value={newGuess}
        />
        <button type='submit' id='guess-btn' disabled={disable}>
          Guess
        </button>
      </form>
      <p>Error message placeholder!</p>
    </div>
  );
};

// disabled={!newGuess}
export default AddGuess;
