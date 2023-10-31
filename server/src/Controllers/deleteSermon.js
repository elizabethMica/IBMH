const {predica} = require('../db.js');

const deleteSermon = async(id)=>{
   const deleted = await predica.destroy({where: {id:id}});

   const response = await predica.findAll();
   
   return response
};

module.exports = {deleteSermon}
