const {contacto} = require('../db.js');

const postContact = async(req, res)=>{
 try {
    const {name, lastName, phone, email, message} = req.body;

    const [newPost, created] = await contacto.findOrCreate({
        where:{phone: phone},
        defaults:{
            name: name,
            lastName: lastName,
            phone: phone,
            email: email,
            message: message
        }
    })

    if(created === true){
        res.status(200).json(newPost)
    }else{
        res.status(404).json({error: "Ya existe un contacto con ese número de teléfono."})
    }
   
 } catch (error) {
    res.status(400).json({error: error.message})
 }
};

module.exports ={postContact}