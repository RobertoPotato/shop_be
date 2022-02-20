const {
    Product,
    User,
  } = require('../models/index');
  
  const dummyId = 4;
  
  //Create a product - Post
  const createNewProduct = async (req, res) => {
    const body = req.body;
    const prod = ''
  
    try {
        const product = await Product.create({
            name: body.name,
            price: body.price,
            userId: body.userId,
          });

          prod = product
    } catch (error) {
        return res.status(500).send(error); 
    }
  
    return res.status(200).send(prod);
  };
  
  //Read the logged-in user's products
  const getUserProducts = async (req, res) => {
    const page = req.params.page;
    const products = await Product.findAndCountAll({
      where: { userId: dummyId },
      limit: pageLimit,
      offset: page * offsetConstant,
    });
    return res.status(200).send(products);
  };
  
  //Read a single product - Get + id
  const getSingleProductById = async (req, res) => {
    const product = await Product.findOne({
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).send(product);
  };
  
  // read all products from db
  const getAllProducts = async (req, res) => {
      prod = [];
    try {
        const products = await Product.findAll({
            include: {
              model: User,
              attributes: ['full_name'],
            },
          });
        
          prod = products
    } catch (error) {

        return res.status(500).send(error);
    }

    return res.status(200).send(prod);
  };
  
  //Update a product - Put
  //TODO Implement
  
  //Delete a product - Delete
  const deleteSingleProductById = async (req, res) => {
    const id = req.params.id;
    Product.destroy({
      where: {
        id: id,
      },
    });
    return res.status(200).send('OK');
  };
  
  module.exports = {
    getAllProducts,
    getSingleProductById,
    deleteSingleProductById,
    createNewProduct,
    getUserProducts,
  };