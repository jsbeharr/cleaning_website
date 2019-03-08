const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
mongoose.connect('mongodb://localhost:27017/exlclean');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	username: {
		type: String,
		unique: true,
		required: true,
		trim: true
	},
	password: {
		type: String,
		required: true,
	}
});

//authenticate input against database
UserSchema.statics.authenticate = (username, password, callback) => {
	User.findOne({ username: username })
		.exec( (err, user) => {
			if (err) {
				return callback(err);
			} else if (!user) {
				err = new Error('User not found.');
				err.status = 401;
				return callback(err);
			}
			bcrypt.compare(password, user.password, (err, result) => {
				if (result === true) {
					return callback(null, user);
				} else {
					return callback();
				}
			});
		});
};

//hashing a password before saving it to the database
UserSchema.pre('save', function (next) {
	let user = this;
	bcrypt.hash(user.password, 12, (err, hash) => {
		if (err) {
			return next(err);
		}
		user.password = hash;
		next();
	});
});

const User = mongoose.model('user', UserSchema);
// eslint-disable-next-line no-undef
module.exports = User;