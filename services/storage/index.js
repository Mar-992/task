const express = require('express');
const api = express();
const router = require('./router');
const upload = require('express-fileupload');
const config = require('../../config/index')


api.use(express.json());

api.use(upload())

api.use('/api/storage', router)

api.listen(config.get('ports').storage, err => {
    if(err) {
        return console.log('Error while starting storage service: ', err);
    }
    console.log('Storage successfully started on port ', config.get('ports').storage );
});