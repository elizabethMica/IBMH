const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('contacto', {
        id:{
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName : {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING
        },
        phone:{
            type: DataTypes.STRING,
            allowNull: false
        },
        message:{
            type: DataTypes.TEXT,
            allowNull: false
        }
    }, {
        timestamps: false
    })
}