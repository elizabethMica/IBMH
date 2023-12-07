const { Router } = require('express');
const { getSermonHandler } = require('../Handlers/getSermonHandler');
const { getByIdHandler } = require('../Handlers/getByIdHandler');
const { deleteSermonHandler } = require('../Handlers/deleteSermonHandler');
const { updateSermonHandler } = require('../Handlers/updateSermonHandler');
const { deleteContact } = require('../Controllers/deleteContact');
const { postContact } = require('../Controllers/postContact');
const { getContact } = require('../Controllers/getContact');
const { getContactDetail } = require('../Handlers/getContactDetail');
const { postSermonHandler } = require('../Handlers/postSermonsHandler');

const route = Router();

//get all sermons
route.get("/sermon", getSermonHandler );

//get sermon detail
route.get("/sermon/:id", getByIdHandler ); 

//post new sermon
route.post("/sermon-post", postSermonHandler); 

//delete sermon by id
route.delete("/sermon-delete/:id", deleteSermonHandler); 

//update sermon by id
route.patch("/sermon-update/:id", updateSermonHandler); 

//------- contact model routes --------//

//get all contact info
route.get("/contact", getContact);

route.get("/contact/:id", getContactDetail);

//post contact info
route.post("/contact-post", postContact );

//delete contact by id
route.delete("/contact-delete/:id", deleteContact);

module.exports = route;