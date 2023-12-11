const {postSermon} = require('../Controllers/postSermon')

const postSermonsHandler = async(req, res)=>{
   try {
      const {title, description, cover, date, videoYT, verse, book, preacher, verseText, keywords, spotifyLink} = req.body
      const response = await postSermon(title, description, cover, date, videoYT, verse, book, preacher, verseText, keywords, spotifyLink)

      res.status(200).json(response)
   } catch (error) {
      console.log(error.message)
      res.status(400).json({error: error.message})
   }
}

module.exports = {postSermonsHandler}