const {updateSermon} = require('../Controllers/updateSermon.js');

const updateSermonHandler = async(req, res)=>{
 try {
    const {id} = req.params;
    console.log(id)
    const {name, description, cover, date, videoYT, book, duration} = req.body;

    const response = await updateSermon(id, name, description, cover, date, videoYT, book, duration );
    res.status(200).json(response)
 } catch (error) {
    res.status(400).json({error:error.message})
 };
};

module.exports = {updateSermonHandler}