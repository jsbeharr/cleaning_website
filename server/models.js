const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/exlclean');
const Schema = mongoose.Schema;

const ClientModel = new Schema({
	company: {type: String, required: true},
	email: {type: String, required: true},
	phone: {type: String, required: true},
	address1: {type: String, required: true},
	address2: String,
	city: {type: String, required: true},
	zipcode: {type: String, required: true},
	date: {type: Date, default: Date.now}
});

// eslint-disable-next-line no-undef
module.exports = mongoose.model('clients', ClientModel);