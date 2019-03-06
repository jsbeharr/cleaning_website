import React from 'react';
import PropTypes from 'prop-types';
import InputMask from 'react-input-mask';
import {
	withStyles,
	MuiThemeProvider,
	createMuiTheme
} from '@material-ui/core/styles';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import blue from '@material-ui/core/colors/blue';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const styles = theme => ({
	textField: {
		marginRight: theme.spacing.unit,
		width: 200,
	},
	paper: {
		...theme.mixins.gutters(),
		paddingTop: theme.spacing.unit * 2,
		paddingBottom: theme.spacing.unit * 2,
		margin: '2em'
	},
	button: {
		display: 'block',
		margin: '1em 0'
	}
});

const theme = createMuiTheme({
	palette: {
		primary: blue
	}
});

class Form extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			companyname: '',
			email: '',
			phone: '',
			address1: '',
			address2: '',
			city: '',
			zip: '',
			open: false,
		};

	}

	// On Input Fields update the state 
	// depending on the input field
	handleInputChange = event => {
		const name = event.target.name;
		const value = event.target.value;

		this.setState({
			[name]: value
		});
	}

	// Opens a confirmation dialog box
	// on form submission
	handleSubmit = event => {
		event.preventDefault();
		const companyname = this.state.companyname;
		const email = this.state.email;
		const phone = this.state.phone;
		const address1 = this.state.address1;
		const address2 = this.state.address2;
		const city = this.state.city;
		const zip = this.state.zip;

		// Checks all required variables are filled
		if (companyname !== '' && email !== '' && phone[12] !== ' ' &&
			address1 !== '' && city !== '' && zip !== '') {
			fetch('/api/addclients', {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					company: companyname,
					email: email,
					phone: phone,
					address1: address1,
					address2: address2,
					city: city,
					zip: zip
				})
			});

			this.setState({
				open: true
			});
		}
	}

	// Closes the confirmation dialog box
	// on the close button and clears the form
	handleClose = () => {
		this.setState({
			open: false,
			companyname: '',
			email: '',
			phone: '',
			address1: '',
			address2: '',
			city: '',
			zip: '',
		});
	}

	render() {

		const { classes } = this.props;

		return (
			<div className='Form'>
				<Paper className={classes.paper} elevation={8}>
					<MuiThemeProvider theme={theme}>
						<ValidatorForm 
							onSubmit={this.handleSubmit}>
							<p>Fill out form if interested in hiring</p>
							<TextValidator
								className={classes.textField}
								id='companyname'
								name='companyname'
								label="Company Name"
								validators={['required']}
								errorMessages={['this field is required']}
								margin="normal"
								onChange={this.handleInputChange}
								value={this.state.companyname}
							/>
							<InputMask
								mask='(999)999-9999'
								maskChar=" "
								onChange={this.handleInputChange}
								value={this.state.phone}
							>
								{() => <TextValidator
									className={classes.textField}
									id='phone'
									name='phone'
									margin="normal"
									label='Phone'
									validators={['required', 'matchRegexp:[0-9]{4}']}
									errorMessages={['this field is required', 'invalid phone number']}
								/>}
							</InputMask>
							<TextValidator
								className={classes.textField}
								id='email'
								name='email'
								margin="normal"
								label='Email'
								validators={['required', 'isEmail']}
								errorMessages={['this field is required', 'email is not valid']}
								onChange={this.handleInputChange}
								value={this.state.email}
							/>
							<TextValidator
								id="address1"
								name="address1"
								label="Address line 1"
								fullWidth
								autoComplete="billing address-line1"
								helperText="Address of Location to be cleaned"
								validators={['required']}
								errorMessages={['this field is required']}
								onChange={this.handleInputChange}
								value={this.state.address1}
							/>

							<TextValidator
								id="address2"
								name="address2"
								label="Address line 2"
								fullWidth
								autoComplete="billing address-line2"
								onChange={this.handleInputChange}
								value={this.state.address2}
							/>
							<TextValidator
								className={classes.textField}
								id="city"
								name="city"
								label="City"
								margin="normal"
								validators={['required']}
								errorMessages={['this field is required']}
								onChange={this.handleInputChange}
								value={this.state.city}
							/>
							<TextValidator
								disabled
								className={classes.textField}
								id="state"
								name="state"
								label="State"
								margin="normal"
								value="Michigan"
							/>
							<TextValidator
								className={classes.textField}
								id="zip"
								name="zip"
								label="Zip / Postal code"
								margin="normal"
								autoComplete="billing postal-code"
								validators={['required', 'isNumber']}
								errorMessages={['this field is required', 'zipcode not valid']}
								onChange={this.handleInputChange}
								value={this.state.zip}
							/>
							<Button
								variant="contained"
								color="primary"
								className={classes.button}
								type="submit">
							Submit
							</Button>
							<Dialog
								open={this.state.open}
								onClose={this.handleClose}
								aria-labelledby="alert-dialog-title"
								aria-describedby="alert-dialog-description"
							>
								<DialogTitle id="alert-dialog-title">{'Thank You!'}</DialogTitle>
								<DialogContent>
									<DialogContentText id="alert-dialog-description">
									A email will be sent to {this.state.email} in a short minute confirming your
									interest in hiring us. We will reach out to you in a few days at the cell
									you provided at {this.state.phone} to gain further information. Thank you for hiring us for your
									cleaning needs and we will be in touch!
									</DialogContentText>
								</DialogContent>
								<DialogActions>
									<Button onClick={this.handleClose} color="primary" autoFocus>
									Close
									</Button>
								</DialogActions>
							</Dialog>
						</ValidatorForm>
					</MuiThemeProvider>
				</Paper>
			</div>
		);
	}
}

Form.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Form);
