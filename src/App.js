import './App.css';
import React from 'react';
import Home from './components/Home/Home';
import NavBar from './components/Navbar/Navbar.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className="container-fluid">
				{/* <header className='App-header'>
				</header> */}
				<div className="row ">
					<div className="col-lg-2 ">
						<NavBar />
					</div>
					<div className="col-lg-10" >
						<div className='App-header' ></div>
						<div>
							<main className="App-main" style={{ marginTop: '30px' }} >
								<Routes>
									<Route exact path="/" element={<Home />} />
								</Routes>
							</main>
						</div>
						<footer className="App-footer">
							<p>@{new Date().getFullYear()} GroupM</p>
						</footer>
					</div>

				</div>

			</div>
		</Router>
	);
}

export default App;
