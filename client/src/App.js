import React, { Component } from 'react';
import Form from './Form/Form';
import Home from './Home/Home';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Router>
					<div className='banner'>
						<header className='banner-header'>
							<p id='title'>Excellent Cleaning Service</p>
							<Link to='/'>Home</Link>
							<Link to='/about'>About Us</Link>
							<Link to='/service'>Our Service</Link>
							<Link to='/contact'>Contact</Link>
							<p
								id='hire-button'
								onClick={
									() => {
										window.scrollTo({
											top: document.querySelector('form').scrollHeight,
											behavior: 'smooth'
										});
									}
								}
							>
								Hire Us
							</p>
						</header>
						<div className='banner-content'>
							<Route
								exact
								path='/'
								render={() => <Home/>}
							/>
						</div>
					</div>
					<div className='form'>
						<Form />
					</div>
				</Router>
			</div>
		);
	}
}

export default App;
