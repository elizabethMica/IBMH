const {deleteSermon} = require('../Controllers/deleteSermon.js');

const deleteSermonHandler = async(req, res)=>{
   try {
     const {id} = req.params;
     const response = await deleteSermon(id);
     res.status(200).json(response)
   } catch (error) {
    res.status(400).json({error:error.message})
   }
};

module.exports = {deleteSermonHandler};