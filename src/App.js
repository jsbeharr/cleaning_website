import React, { Component } from 'react';
import Form from './Form/Form';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<header className='App-header'>
					<p id='title'>Beharry Cleaning</p>
					<p id='hire-button'>Hire Us</p>
				</header>
				<div className='content'>
					<div className='banner'>
						<div className='banner-tagline'>
							<p>
							Cleaning Businesses throughout Metro Detroit
							</p>
							<p>Give Us a Call!</p>
							<p id='contact'>Contact</p>
						</div>
					</div>
					<Form />
				</div>
			</div>
		);
	}}

export default App;