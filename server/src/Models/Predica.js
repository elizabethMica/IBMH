const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('predica', {
        id:{
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4
        },
        //titulo de la predica
        name:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        //descripción de la predica
        description:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        //portada (recibe un link de una imagen de google)
        cover:{
            type: DataTypes.STRING,
            defaultValue: 'https://img.freepik.com/foto-gratis/biblia-sobre-madera_1150-17655.jpg?w=900&t=st=1698444675~exp=1698445275~hmac=430af8cbd060703270884f430ee41301863b85e779860f7efa2e3055dbb80cc8'
        },
        //fecha de la predica
        date:{
            type: DataTypes.STRING,
            allowNull:false
        },
        //link para el embed del front
        videoYT:{
            type: DataTypes.STRING,
            allowNull:false
        },
        //libro de la biblia
        book:{
            type: DataTypes.STRING,
            allowNull:false
        },
        //duracion del video de yt
        duration:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },{
        timestamps: false
    })
}