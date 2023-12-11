const {predica} = require('../db')

const postSermon = async(title, description, cover, date, videoYT, verse, book, preacher, verseText, keywords, spotifyLink )=>{
  
    const [newPost, created] = await predica.findOrCreate({
        where:{date},
        defaults:{
            title,
            description,
            cover,
            date,
            videoYT,
            verse,
            book,
            preacher,
            verseText,
            keywords,
            spotifyLink
        }
    })

    if(created === true){
        return newPost;
    }else{
        throw new Error("Ya existe un sermón con esa fecha")
    }
}

module.exports = {postSermon}