import './App.css';
import Header from './components/Header';
import Guess from './components/Guess';
import Restart from './components/Restart';

function App() {
  return (
		<div>
			<Header></Header>
			<Guess></Guess>
			<Restart></Restart>
		</div>
	);
}

export default App;
