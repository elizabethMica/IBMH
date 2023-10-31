const {getByName} = require('../Controllers/getByName.js');
const {getAll} = require('../Controllers/getAll.js');

const getSermonHandler = async(req, res)=>{
   const {name} = req.query;
   try {
     const response = name ? await getByName(name) : await getAll();
     
     res.status(200).json(response)

   } catch (error) {
     res.status(400).send({error: error.message})
   }
};

module.exports = {getSermonHandler};

