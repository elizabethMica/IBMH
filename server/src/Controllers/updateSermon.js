const {predica} = require('../db.js');

const updateSermon = async(req, res)=>{
 try {
    const {id} = req.params;
    const {name, description, cover, date, videoYT, book, duration} = req.body;
    
    const alreadyExists = await predica.findOne({where:{name:name}});
    
    if(alreadyExists && alreadyExists.id !== id){
        return res.status(404).json({error: "Ya existe un sermón con el mismo nombre"})
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
        return res.status(404).json({ message: 'No se encuentra el sermón solicitado' });
      }else{
        const updated = await predica.findByPk(id)
        return res.status(200).json(updated)
      }
    
    // const updated = await predica.findByPk(id);

    // return res.status(200).json(updated);

 } catch (error) {
    res.status(400).json({error:error.message})
 }
};

module.exports = {updateSermon}