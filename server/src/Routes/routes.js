const { Router } = require('express');
const { getSermonHandler } = require('../Handlers/getSermonHandler');
const { postSermon } = require('../Controllers/postSermon');
const { getByIdHandler } = require('../Handlers/getByIdHandler');
const { deleteSermonHandler } = require('../Handlers/deleteSermonHandler');
const { updateSermonHandler } = require('../Handlers/updateSermonHandler');

const route = Router();

//get all sermons
route.get("/sermon", getSermonHandler );//funciona, get all y get by name

//get all contact info
route.get("/contact", )

//get sermon detail
route.get("/sermon/:id", getByIdHandler ); //funciona by id

//post new sermon
route.post("/sermon-post", postSermon); //funciona el post

//post contact info
route.post("/contact-post", )

//delete sermon by id
route.delete("/sermon-delete/:id", deleteSermonHandler); //funciona el delete

//delete contact by id
route.delete("/contact-delete", )

//update sermon by id
route.patch("/sermon-update/:id", updateSermonHandler); //funciona el update (si o si hay que pasarle un title por ahora)

module.exports = route;