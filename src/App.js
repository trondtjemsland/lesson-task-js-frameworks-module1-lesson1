import ProfileName from "./components/profile/ProfileName";
import DefaultProfilePic from "./components/profile/DefaultProfilePic";
import "./App.css";

function App() {
	return (
		<div className="App">
			<ProfileName name="Mr Blobby" />
			<DefaultProfilePic altText="Mr Blobby's picture" />
		</div>
	);
}

export default App;
