const {predica} = require('../db.js');

const getAll = async()=>{
   const response = await predica.findAll();

   return response;
}

module.exports = {getAll};