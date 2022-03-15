import './App.css';
import Name from './components/ProfileName';
import ProfilePic from './components/DefaultProfilPic';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Name prop="Trondnado" />
				<ProfilePic prop="gif of me " />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer">
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
