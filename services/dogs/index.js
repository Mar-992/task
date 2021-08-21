const express = require('express');
const api = express();
const router = require('./router')
const config = require('../../config/index')


api.use(express.json());


api.use('/api/breed', router)

api.listen(config.get('posts').dogs, err => {
    if(err){
        return console.log('Error while starting dog service: ', err);
    }
    console.log('Dogs successfully started on port', config.get('ports').dogs);
}); 