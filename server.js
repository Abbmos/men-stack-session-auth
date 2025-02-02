require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const morgan = require('morgan');
const port = process.env.PORT ? process.env.PORT : 3000; 

//creates connection to mongoDB
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('connected', () => {
console.log(`connected to mongoDB ${mongoose.connect.name}`);

})

app.listen(port, () => {


    console.log('the express app is ready on port '+port);
});