import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

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
UserSchema.statics.authenticate =  (username, password, fn) => {
	User.findOne({ username: username }, (err, user) => {
		if (!user) return fn(new Error('cannot find user'));
		bcrypt.compare(password, user.password, (err, result) => {
			if (err) return fn(err);
			if (result) return fn(null, user);
			fn(new Error('invalid Password'));
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

const User = mongoose.model('User', UserSchema);
export default User;