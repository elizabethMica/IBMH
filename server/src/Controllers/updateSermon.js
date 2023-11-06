const {predica} = require('../db.js');

//si no se le pasa un valor a name no se puede actualizar otro por si mismo
const updateSermon = async(id, title, description, cover, date, videoYT, book, verse)=>{
    
    const alreadyExists = await predica.findOne({where:{title: title}});
    
    if(alreadyExists && alreadyExists.id !== id){
        throw Error("Ya existe un sermón con el mismo titulo")
    };

    const editedSermon = await predica.update({
        title: title,
        description: description,
        cover: cover,
        date: date,
        videoYT: videoYT,
        book: book,
        verse: verse
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