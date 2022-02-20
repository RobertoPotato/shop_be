//Create a user - Register
//Log a user In  - authenticate & authorize
//Send email/mobile verification
//Reset password

const { User } = require('../models/index');

//Create a user - Post
//Post => /
//TODO Implement
const createNewUser = async (req, res) => {
    const body = req.body;
  
    const user = await User.create({
        full_name: body.full_name,
        age: body.age,
    });
  
    return res.status(200).send(user);
};

//Read a single user - Get + id
// Get => /id
//TODO Implement
const getSingleUserById = async (req, res) => {
  const user = await User.findOne({
    where: {
      id: req.params.id,
    },
  });
  return res.status(200).send(user);
};

//Read multiple users based on search criteria - Get + criteria
//Get => /
//TODO Implement
const getAllUsers = async (req, res) => {
  const users = await User.findAll({});
  return res.status(200).send(users);
};

//Update a user - Put
//Put => /id
//TODO Implement
const updateUserById = async (req, res) => {
  const id = req.params.id;
  await User.update(
    {
      /* Update parameters */
    },
    { where: { id: id } }
  );
  return res.status(200).send('OK');
};

//Delete a user - Delete
//Delete => /id
//TODO Implement
const deleteSingleUserById = async (req, res) => {
  const id = req.params.id;
  User.destroy({
    where: {
      id: id,
    },
  });
  return res.status(200).send('OK');
};

module.exports = {
  getAllUsers,
  getSingleUserById,
  deleteSingleUserById,
  updateUserById,
  createNewUser,
};