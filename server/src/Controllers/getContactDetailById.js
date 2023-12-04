const {contacto} = require('../db.js')

const getContactDetailById = async(id) =>{
   const response = await contacto.findOne({
    where:{id: id}
   });

   return response;
}

module.exports = {getContactDetailById}