// Write your model in this file!
const db = require('../db/config');
// empty object for the pizza
const Pizza = {};
// findall for the all quotes in pizza
Pizza.findAll = () => {
  return db.query('SElECT * FROM pizza');
}
// id for finding id from the pizza
Pizza.findById = (id) => {
  return db.oneOrNone(`
    SElECT * FROM pizza
    WHERE id = $1
    `, [id]);
  }
// create method for the pizza
  Pizza.create = pizza => {
    return db.one(
      `
      INSERT INTO pizza
      (flavor, description, location)
      VALUES ($1, $2, $3)
      RETURNING *
      `,
      [pizza.flavor, pizza.description, pizza.location]

      );
  };
// update method
  Pizza.update = (pizza, id) => {
    return db.one(`
      UPDATE pizza SET flavor = $1, description = $2, location = $3 WHERE id = $4
      `, [pizza.flavor, pizza.description, pizza.location, id]
      );
  };
// delete method
Pizza.destroy = (id) => {
  return db.none(`
    DELETE FROM pizza WHERE id = $1
    `, [id]);

}
module.exports = Pizza;
