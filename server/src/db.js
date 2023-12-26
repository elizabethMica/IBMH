require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const { Sequelize } = require("sequelize");
const Predica = require('./Models/Predica.js');
const Contact = require('./Models/Contact.js');

const sequelize = new Sequelize(
  // `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/ibmh`,
  "postgres://ibmhdb_user:jllt35kHbVnuMlSCROuzcKvZkD03M27c@dpg-cm5meea1hbls73akj79g-a/ibmhdb",
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
