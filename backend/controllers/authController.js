const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const users = require('../models/userModel');
const { SECRET_KEY, JWT_EXPIRATION } = require('../config');

// Login
const login = (req, res) => {
  const { username, password } = req.body;

  const user = users.find((u) => u.username === username);
  if (!user) return res.status(404).send({ message: 'User not found' });

  const passwordIsValid = bcrypt.compareSync(password, user.password);
  if (!passwordIsValid) return res.status(401).send({ token: null, message: 'Invalid Password' });

  const token = jwt.sign({ id: user.id, role: user.role }, SECRET_KEY, { expiresIn: JWT_EXPIRATION });
  res.status(200).send({ token, user });
};

// Register
const register = (req, res) => {
  const { username, password, role } = req.body;
  if (users.find((u) => u.username === username)) {
    return res.status(400).send({ message: 'Username already exists' });
  }

  const hashedPassword = bcrypt.hashSync(password, 8);
  const newUser = { id: users.length + 1, username, password: hashedPassword, role };
  users.push(newUser);
  res.status(201).send({ message: 'User registered successfully', user: newUser });
};

// Logout (Invalidate the token on the client side)
const logout = (req, res) => {
  res.status(200).send({ message: 'Logged out successfully' });
};

module.exports = { login, register, logout };
