import React, { Component } from 'react';
import Form from './Form/Form';
import Home from './Home/Home';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { FaAlignJustify } from 'react-icons/fa';

import './App.css';

class App extends Component {

	toggleResponsiveMenu = () => {
		let x = document.getElementById('topnav');
		x.className = x.className === '' ? 'responsive' : '';
	}

	render() {
		return (
			<div className='App'>
				<Router>
					<div className='banner'>
						<header className='banner-header'>
							<p id='title'>Motor City Janitorial Service</p>
							<navigation id='topnav'>
								<Link to='/'>Home</Link>
								<Link to='/about'>About Us</Link>
								<Link to='/service'>Our Service</Link>
								<Link to='/contact'>Contact</Link>
								<FaAlignJustify onClick={this.toggleResponsiveMenu} size='2em' style={{color: 'white'}} />
							</navigation>
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
								render={() => <Home />}
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
