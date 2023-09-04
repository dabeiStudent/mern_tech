//import library, models, api...
const express = require('express');
const connectDB = require('./config/db');
const router = require('./api/books');
const app = express();
const bodyParser = require('body-parser')
const server = require('http').createServer(app);
//////////////////////////////////////////////////
connectDB();
//book_seeder
//const seedbooks = require('./seeder/seedbooks');

app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.use('/', router);

const PORT = process.env.PORT || 8082;
server.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`);
})