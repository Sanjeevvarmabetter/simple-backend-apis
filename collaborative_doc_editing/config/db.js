const mongoose = require('mongoose');

const connectToDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        
        console.log('MongoDb connected');
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
};


module.exports = connectToDb;