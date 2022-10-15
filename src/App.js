import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import Auth from "./Pages/Auth/Auth";
import Dashboard from "./Pages/Dashboard/Dashboard";

function App() {
	const user = useSelector((state) => state.authReducers.authData);

	return (
		<div className="App">
			<Routes>
				<Route
					path="/"
					element={
						user ? (
							<Navigate to="dashboard" />
						) : (
							<Navigate to="auth" />
						)
					}
				/>
				<Route
					path="/dashboard"
					element={user ? <Dashboard /> : <Navigate to="../auth" />}
				/>
				<Route
					path="/auth"
					element={user ? <Navigate to="../dashboard" /> : <Auth />}
				/>
			</Routes>
		</div>
	);
}

export default App;
