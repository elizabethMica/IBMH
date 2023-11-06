const {contacto} = require('../db.js');

const getContact = async(req, res)=>{
    try {
        const response = await contacto.findAll();

        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
};

module.exports = {getContact}