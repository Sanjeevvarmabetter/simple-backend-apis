const express = require('express');
const connectDb = require('./config/db');
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todoRoutes');

const app = express();

const port = 5000;


connectDb();

app.use(bodyParser.json());

app.use('/api',todoRoutes);

app.listen(port, () => {
	console.log(`server running on port ${port}`);
});
