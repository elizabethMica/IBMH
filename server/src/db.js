require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const { Sequelize } = require("sequelize");
const Predica = require('./Models/Predica.js');
const Contact = require('./Models/Contact.js');

const sequelize = new Sequelize(
  // `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/ibmh`,
  "postgres://ibmhdb_p3jq_user:4ypmdwFHHizHsynmwxuyt5REHqCgr58B@dpg-co8sf48l5elc7394ki90-a/ibmhdb_p3jq",
  { logging: false, native: false }
);


Predica(sequelize);
Contact(sequelize);

const {
  predica,
  contacto
} = sequelize.models;



module.exports ={
  ...sequelize.models,
  predica,
  contacto,
  conn: sequelize
}
