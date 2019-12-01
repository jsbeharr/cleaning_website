import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

// Create the database connection 
mongoose.connect(process.env.DB_URI, {
	useNewUrlParser: true
});
mongoose.set('useCreateIndex', true); 

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected',() => {  
	console.log('Mongoose connection open');
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