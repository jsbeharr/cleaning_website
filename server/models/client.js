import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
	company: {type: String, required: true},
	email: {type: String, required: true},
	phone: {type: String, required: true},
	address1: {type: String, required: true},
	address2: String,
	city: {type: String, required: true},
	zipcode: {type: String, required: true},
	date: {type: Date, default: Date.now}
});

export default mongoose.model('Client', ClientSchema);