import React from 'react';
import PropTypes from 'prop-types';
import InputMask from 'react-input-mask';
import {
	withStyles,
	MuiThemeProvider,
	createMuiTheme
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
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
	handleClickOpen = () => {
		const curr_state = this.state;
		const companyname = curr_state.companyname;
		const phone = curr_state.phone;
		const address1 = curr_state.address1;
		const city = curr_state.city;
		const zip = curr_state.zip;

		// Checks all required variables are filled
		if (companyname !== '' && phone !== '' &&
			address1 !== '' && city !== '' && zip !== '') {
			this.setState({
				open: true
			});
		}
	}

	// Closes the confirmation dialog box
	// on the close button
	handleClose = () => {
		this.setState({
			open: false
		});
	}

	render() {

		const { classes } = this.props;

		return (
			<div className='Form'>
				<Paper className={classes.paper} elevation={8}>
					<MuiThemeProvider theme={theme}>
						<form>
							<p>Fill out form if interested in hiring</p>
							<TextField
								required
								className={classes.textField}
								id='companyname'
								name='companyname'
								label="Company Name"
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
								{() => <TextField
									required
									className={classes.textField}
									id='phone'
									name='phone'
									margin="normal"
									label='Phone'
								/>}
							</InputMask>
							<TextField
								required
								className={classes.textField}
								id='email'
								name='email'
								margin="normal"
								label='Email'
								onChange={this.handleInputChange}
								value={this.state.email}
							/>
							<TextField
								required
								id="address1"
								name="address1"
								label="Address line 1"
								fullWidth
								autoComplete="billing address-line1"
								helperText="Address of Location to be cleaned"
								onChange={this.handleInputChange}
								value={this.state.address1}
							/>

							<TextField
								id="address2"
								name="address2"
								label="Address line 2"
								fullWidth
								autoComplete="billing address-line2"
								onChange={this.handleInputChange}
								value={this.state.address2}
							/>
							<TextField
								required
								className={classes.textField}
								id="city"
								name="city"
								label="City"
								margin="normal"
								onChange={this.handleInputChange}
								value={this.state.city}
							/>
							<TextField
								required
								disabled
								className={classes.textField}
								id="state"
								name="state"
								label="State"
								margin="normal"
								value="Michigan"
							/>
							<TextField
								required
								className={classes.textField}
								id="zip"
								name="zip"
								label="Zip / Postal code"
								margin="normal"
								autoComplete="billing postal-code"
								onChange={this.handleInputChange}
								value={this.state.zip}
							/>
							<Button
								variant="contained"
								color="primary"
								className={classes.button}
								onClick={this.handleClickOpen}>
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
						</form>
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