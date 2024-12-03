const users = require('../models/userModel');

// Admin-only route to get all users
const getAllUsers = (req, res) => {
  res.status(200).send(users);
};

// Admin-only route to update user roles
const updateUserRole = (req, res) => {
  const { id, role } = req.body;
  const user = users.find((u) => u.id === id);
  if (!user) return res.status(404).send({ message: 'User not found' });

  user.role = role;
  res.status(200).send({ message: 'User role updated', user });
};
// Delete a user by username
const deleteUser = (req, res) => {
    const { username } = req.params;
    const userIndex = users.findIndex((u) => u.username === username);
    if (userIndex === -1) {
      return res.status(404).send({ message: 'User not found' });
    }
    users.splice(userIndex, 1);
    res.status(200).send({ message: 'User deleted successfully' });
  };
  
  module.exports = { getAllUsers, updateUserRole, deleteUser };
  

