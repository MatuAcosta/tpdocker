require('dotenv').config()

const config = {
    host: process.env.HOST,
    db: process.env.DB,
    user: process.env.USER,
    password: process.env.PASSWORD
}

module.exports = config; 