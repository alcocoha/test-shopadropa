import Books from "./pages/books";
import CreateBook from "./pages/books/createBook";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";

function App() {
	return (
		<Router>
			<div className="App">
				<div className="books__list-container">
					<Routes>
						<Route element={<Books />} path="/" exact />
						<Route element={<CreateBook />} path="/create" exact />
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
