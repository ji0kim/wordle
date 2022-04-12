import './App.css';
import Header from './components/Header';
import Guess from './components/Guess';

function App() {
	return (
		<section id="wordle-body">
			<Header></Header>
			<Guess></Guess>
		</section>
	);
}

export default App;
