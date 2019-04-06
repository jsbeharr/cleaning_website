import React, { Component } from 'react';
import Form from './Form/Form';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<div className='banner'>
					<header className='banner-header'>
						<p id='title'>Excellent Cleaning Service</p>
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
						<div className='banner-tagline'>
							<p>
								Cleaning Businesses throughout Metro Detroit
							</p>
							<p>Have Any Questions?</p>
							<p>Give Us a Call!</p>
							<div className='contact'>
								<p>(734)502-9574</p>
								<p>excellentcleaningservicemichigan@gmail.com</p>
							</div>
						</div>
					</div>
				</div>
				<div className='form'>
					<Form />
				</div>
			</div >
		);
	}
}

export default App;
