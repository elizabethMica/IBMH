const {predica} = require('../db.js');

const postSermon = async(req, res)=>{

    const image = "https://img.freepik.com/foto-gratis/biblia-sobre-madera_1150-17655.jpg?w=900&t=st=1698444675~exp=1698445275~hmac=430af8cbd060703270884f430ee41301863b85e779860f7efa2e3055dbb80cc8"
   

    try {
        const {title, description, cover, date, videoYT, book, verse, verseText, preacher, spotifyLink, keywords} = req.body

        const [newPost, created] = await predica.findOrCreate({
            where: {title: title},
            defaults:{
                title: title,
                description: description,
                cover: cover ? cover : image,
                date: date,
                videoYT: videoYT,
                book: book,
                verse: verse,
                verseText: verseText,
                preacher: preacher,
                spotifyLink: spotifyLink,
                keywords: keywords
            }
        })

        if(created === true){
            res.status(200).json(newPost)
        }else{
            res.status(404).json({error: "La predica ya existe"})
        }
       
    } catch (error) {
        console.log(error.message)
        res.status(400).json({error: error.message})
    };

};

module.exports = {postSermon}