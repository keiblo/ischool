import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin',
    email: 'kei@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Blokhina Natalya',
    email: 'natalya@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Jane Doe',
    email: 'jane@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
