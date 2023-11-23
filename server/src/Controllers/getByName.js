const {predica} = require('../db.js');
const {Op} = require('sequelize');

const getByName = async(name)=>{
    
  const response = await predica.findAll({
    where:{ 
        title: {
        [Op.iLike]: `%${name}%`,
        }
    }
  });

  return response;
};

module.exports = {getByName}