const mongoose = require('mongoose');

mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true , useUnifiedTopology: true}, err => {
    if (err) {
      return console.log('Could not connect to DB: ', err);
    }
  
    console.log('Successfully connected to database...');
  });
  