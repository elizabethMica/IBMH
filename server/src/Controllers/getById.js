const {predica} = require('../db.js')

const getById = async(id) =>{
   const response = await predica.findOne({
    where:{id: id}
   });

   return response;
}

module.exports = {getById}