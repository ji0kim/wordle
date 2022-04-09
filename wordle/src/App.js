import './App.css';
import Header from './components/Header';
import Guess from './components/Guess';
import Restart from './components/Restart';

function App() {
  return (
		<section id="wordle-body">
			<Header></Header>
			<Guess></Guess>
			<Restart></Restart>
		</section>
	);
}

export default App;
