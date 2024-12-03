const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config');

const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
if (authHeader && authHeader.startsWith('Bearer ')) {
  var token = authHeader.split(' ')[1]; 
} else {
  console.error('Authorization header is missing or malformed.');
}

  if (!token) {
    return res.status(403).send({ message: 'No token provided' });
  }

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    console.log(err,decoded)
    if (err) {
      return res.status(401).send({ message: 'Unauthorized' });
    }
    req.userId = decoded.id;
    req.role = decoded.role;
    next();
  });
};

const isAdmin = (req, res, next) => {
  if (req.role !== 'admin') {
    return res.status(403).send({ message: 'Requires admin role' });
  }
  next();
};

const isEditor = (req, res, next) => {
  if (req.role !== 'admin' && req.role !== 'editor') {
    return res.status(403).send({ message: 'Requires admin or editor role' });
  }
  next();
};

module.exports = { verifyToken, isAdmin, isEditor };
