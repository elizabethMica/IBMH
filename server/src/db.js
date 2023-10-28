require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const { Sequelize } = require("sequelize");
const Predica = require('./Models/Predica.js');

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/ibmh`,
  { logging: false, native: false }
);


Predica(sequelize);

const {
  predica
} = sequelize.models;



module.exports ={
  ...sequelize.models,
  predica,
  conn: sequelize
}
