import React from 'react';
import PropTypes from 'prop-types';
import './Form.css';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
		width: 200,
	}
});

const form = (props) => {

	const {classes} = props;

	return (
		<div className='Form'>
			<div className='card'>
				<form>
					<p>Fill Out Form</p>
					<TextField
						required
						className={classes.textField}
						label="First Name"
						margin="normal"
					/>
					<TextField
						required
						className={classes.textField}
						label="Last Name"
						margin="normal"
					/>
				</form>
			</div>
		</div>
	);
};

form.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(form);