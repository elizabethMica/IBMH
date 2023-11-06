const {contacto} = require('../db');

const deleteContact = async(req,res)=>{
    try {
      const {id} = req.params
      const deleted = await contacto.destroy({where:{id: id}});
      const response = await contacto.findAll();
      res.status(200).json(response)
      
    } catch (error) {
        res.status(404).json({error: error.message})
    }
};

module.exports = {deleteContact}