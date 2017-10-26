// Write your controller in this file!
const Pizza = require('../models/pizza');
// declare an empty pizzaController object..
const pizzaController = {};
// controller index ask model to get the data and give them back as a
// json data
pizzaController.index =(req, res) => {
  Pizza.findAll()
  .then(pizza => {
    res.json({
      message:'ok',
      data:pizza,
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};
// show method that talk with models
pizzaController.show = (req, res) => {
  Pizza.findById(req.params.id)
  .then(pizza => {
    res.json({
      message:'ok',
      data:pizza,
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });

};
// create method
pizzaController.create = (req, res) => {
  Pizza.create({
    flavor: req.body.flavor,
    description: req.body.description,
    location: req.body.location,
  })
  .then(quote => {
    res.json ({
      message: 'Pizza name added succesfully!',
      data: pizza,
    });
  })
  .catch(err => {
    res.status(500).json(err);
  });
};
// update method for the pizzacontroller
pizzaController.update = (req, res) =>{
  const pizzaId = req.params.id;
  pizza.update({
    flavor: req.body.flavor,
    description: req.body.description,
    location: req.body.location
  }, pizzaId).then(quote => {
    res.json ({
      message: "Updated successfully!",
      data: pizza
    })
  })
}

// delete method
pizzaController.delete = (req, res) => {
  Pizza.destroy(req.params.id)
  .then(() => {
    res.json({
      message:'Pizza name added succesfully!',
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
}




module.exports = pizzaController;


