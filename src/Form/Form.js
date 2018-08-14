import React from 'react';
import './Form.css';
import TextField from '@material-ui/core/TextField';

const form = () => {
	return (
		<div className='Form'>
			<div className='card'>
				<form>
					<p>Fill Out Form</p>
					<TextField
						required
						label="First Name"
						margin="normal"
					/>
					<TextField
						required
						label="Last Name"
						margin="normal"
					/>
				</form>
			</div>
		</div>
	);
};

export default form;