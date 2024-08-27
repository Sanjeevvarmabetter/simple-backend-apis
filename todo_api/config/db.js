// connection for mongoDb
//
//

const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();


const connectToDb = async () => {
	try {
		await mongooose.connect(process.env.MONGO_URL, {
			
			userNewUrlParser: true,
			useUnifiedTopology: true,
		});


		console.log('MongoDb connected .. ');
	} catch (err) {
		console.log('error connecting to mongo');
		process.exit(1);
	}
};


module.exports = connectToDb;



