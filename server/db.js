import mongoose from 'mongoose';

// Create the database connection 
const dbURI = 'mongodb://localhost:27017/exlclean';
mongoose.connect(dbURI, {
	useNewUrlParser: true
});
mongoose.set('useCreateIndex', true); 

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected',() => {  
	console.log('Mongoose connection open to ' + dbURI);
}); 

// If the connection throws an error
mongoose.connection.on('error', (err) => {  
	console.log('Mongoose default connection error: ' + err);
	process.exit(1);
}); 

// When the connection is disconnected
mongoose.connection.on('disconnected', () => {  
	console.log('Mongoose default connection disconnected');
	process.exit(0);
});

// If the Node process ends, close the Mongoose connection 
process.on('SIGINT', () => {  
	mongoose.connection.close(() => { 
		console.log('Mongoose default connection disconnected through app termination'); 
		process.exit(0); 
	}); 
});