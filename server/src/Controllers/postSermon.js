const {predica} = require('../db.js');

const postSermon = async( id, title, description, cover, date, videoYT, book, verse,  verseText, keywords, spotifyLink, preacher)=>{
      console.log("controller", title, date)

        const newPost = await predica.findOrCreate({
            where: {date: date},
            defaults:{
                title: title,
                description: description,
                cover: cover ,
                date: date,
                videoYT: videoYT,
                book: book,
                verse: verse,
                verseText: verseText,
                keywords: keywords,
                spotifyLink: spotifyLink,
                preacher: preacher,
            }
        })

       return newPost;

};

module.exports = {postSermon}