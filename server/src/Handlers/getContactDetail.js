const {getContactDetailById} = require('../Controllers/getContactDetailById.js');

const getContactDetail =async(req, res)=>{
 
    const {id} = req.params
    try {
        const response = await getContactDetailById(id);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error:error.message})
    }
};

module.exports = {getContactDetail}