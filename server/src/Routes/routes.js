const { Router } = require('express');
const { getSermonHandler } = require('../Handlers/getSermonHandler');
const { postSermon } = require('../Controllers/postSermon');
const { getByIdHandler } = require('../Handlers/getByIdHandler');
const { deleteSermonHandler } = require('../Handlers/deleteSermonHandler');
const { updateSermonHandler } = require('../Handlers/updateSermonHandler');

const route = Router();

//get all sermons
route.get("/sermon", getSermonHandler );//funciona, get all y get by name

//get sermon detail
route.get("/sermon/:id", getByIdHandler ); //funciona by id

//post new sermon
route.post("/sermon-post", postSermon); //funciona el post

// //delete sermon by id
route.delete("/sermon-delete/:id", deleteSermonHandler);

// //update sermon by id
route.patch("/sermon-update/:id", updateSermonHandler);

module.exports = route;