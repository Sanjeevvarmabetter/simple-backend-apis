const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');

dotenv.config();

const app = express();



connectDB();


app.use(express.json());


app.use('/api/tasks',require('./routes/tasks'))

const port = 5000;


app.listen(port,()=> {
    console.log(`Server started on port ${port}`);
});