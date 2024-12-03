const bcrypt = require('bcryptjs');

const users = [
  { id: 1, username: 'admin', password: bcrypt.hashSync('admin123', 8), role: 'admin' },
  { id: 2, username: 'editor', password: bcrypt.hashSync('editor123', 8), role: 'editor' },
  { id: 3, username: 'viewer', password: bcrypt.hashSync('viewer123', 8), role: 'viewer' }
];

module.exports = users;
