const express = require('express');
const router = express.Router();
const controller = require('../../controllers/dog');


router.post('/create', controller.createOne) 
      .get('/list/all', controller.getAll)
      .get('/:typeOfBreed/image/random', controller.getImage) // ova ne e zavrsheno