// Write your database config in this file!
const options ={
  query: (e) => {
    console.log(e.query);
  }
};
//pg-promise hold data in database
const pgp = require('pg-promise')(options);

let db;

if(process.env.NODE_ENV ==='development' || !process.env.NODE_ENV) {
  db = pgp({
    database: 'pizza_dresselhaus_dev',
    port: 5432,
    host: 'localhost',
  });

} else if (process.env.NODE_ENV === 'production'){
  db = pgp(process.env.DATABASE_URL);
}

module.exports = db;
