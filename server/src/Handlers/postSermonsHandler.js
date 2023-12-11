const {postSermon} = require('../Controllers/postSermon')

const postSermonHandler = async(req, res)=>{
 try {
    const {title, description, cover, date, videoYT, book, verse,  verseText, keywords, spotifyLink, preacher} = req.body;
    console.log("handler", req.body)

    const response = await postSermon(title, description, cover, date, videoYT, book, verse,  verseText, keywords, spotifyLink, preacher);
    res.status(200).json(response)
 } catch (error) {
    console.log(error.message)
    res.status(400).json({error:error.message})
 };
};

module.exports ={postSermonHandler}