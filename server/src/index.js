const server = require('./app.js')
const { conn } = require('./db.js');

// Syncing all the models at once.
conn.sync({ force: true }).then(async() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
