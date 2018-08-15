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

const form = (props) => {

	const {classes} = props;

	return (
		<div className='Form'>
			<Paper className={classes.paper} elevation={8}>
				<MuiThemeProvider theme={theme}>
					<form>
						<p>Fill out form if interested in hiring</p>
						<TextField
							required
							className={classes.textField}
							id='firstname'
							name='firstname'
							label="First Name"
							margin="normal"
						/>
						<TextField
							required
							className={classes.textField}
							id='lastname'
							name='lastname'
							label="Last Name"
							margin="normal"
						/>
						<InputMask
							mask='(999) 999-9999'
							maskChar=" "
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
							id="address1"
							name="address1"
							label="Address line 1"
							fullWidth
							autoComplete="billing address-line1"
							helperText="Address of Location to be cleaned"
						/>
						
						<TextField
							id="address2"
							name="address2"
							label="Address line 2"
							fullWidth
							autoComplete="billing address-line2"
						/>
						<TextField
							required
							className={classes.textField}
							id="city"
							name="city"
							label="City"
							margin="normal"
							autoComplete="billing address-level2"
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
						/>
						<Button variant="contained" color="primary" className={classes.button}>
						Submit
						</Button>
					</form>
				</MuiThemeProvider>
			</Paper>
		</div>
	);
};

form.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(form);