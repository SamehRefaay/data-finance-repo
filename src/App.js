import './App.css';
import Analytics from './components/Analytics';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import NewsLetter from './components/NewsLetter';
import Plans from './components/Plans';

function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<Analytics />
			<NewsLetter />
			<Plans />
		</>
	);
}

export default App;
