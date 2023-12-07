const {postSermon} = require('../Controllers/postSermon')

const postSermonHandler = async(req, res)=>{
 try {
    const {id} = req.params;
    const {title, description, cover, date, videoYT, book, verse,  verseText, keywords, spotifyLink, preacher} = req.body;
    console.log("handler", title, date)

    const response = await postSermon(id, title, description, cover, date, videoYT, book, verse,  verseText, keywords, spotifyLink, preacher);
    res.status(200).json(response)
 } catch (error) {
    console.log(error.message)
    res.status(400).json({error:error.message})
 };
};

module.exports ={postSermonHandler}