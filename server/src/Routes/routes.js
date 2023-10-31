const {Router} = require('express');
const { getById } = require('../Controllers/getById');
const { getSermonHandler } = require('../Handlers/getSermonHandler');

const route = Router();

//get all sermons
route.get("/sermons", getSermonHandler );

//get sermon detail
route.get("/sermon/:id", getById );

//post new sermon
route.post("/sermon-post", );

//delete sermon by id
route.delete("/sermon-delete/:id", );

//update sermon by id
route.patch("sermon-update/:id", )