const {predica} = require('../db.js');

const updateSermon = async(id, name, description, cover, date, videoYT, book, duration)=>{
    
    const alreadyExists = await predica.findOne({where:{id:id}});
    
    if(alreadyExists.name === name && alreadyExists.id !== id){
        throw Error("Ya existe un sermón con el mismo nombre")
    };

    const editedSermon = await predica.update({
        name: name,
        description: description,
        cover: cover,
        date: date,
        videoYT: videoYT,
        book: book,
        duration: duration
        },
        {
            where: {
                id: id,
            },
        }
    );

    if(editedSermon[0] === 0) {
        throw Error("Algo salió mal")
      }

    const updated = await predica.findByPk(id)
    return updated

};

module.exports = {updateSermon}