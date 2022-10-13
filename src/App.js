import "./App.scss";
import Navigation from "./Components/Navigation/Navigation";
import Auth from "./Pages/Auth/Auth";
import Dashboard from "./Pages/Dashboard/Dashboard";

function App() {
	return (
		<div className="App">
			<Navigation />
			{/* <Dashboard /> */}
			<Auth/>
		</div>
	);
}

export default App;
