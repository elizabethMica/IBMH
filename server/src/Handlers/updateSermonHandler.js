const {updateSermon} = require('../Controllers/updateSermon.js');

const updateSermonHandler = async(req, res)=>{
 try {
    const {id} = req.params;
    console.log(id)
    const {title, description, cover, date, videoYT, book, verse} = req.body;

    const response = await updateSermon(id, title, description, cover, date, videoYT, book, verse,  verseText, keywords, spotifyLink, preacher );
    res.status(200).json(response)
 } catch (error) {
    res.status(400).json({error:error.message})
 };
};

module.exports = {updateSermonHandler}