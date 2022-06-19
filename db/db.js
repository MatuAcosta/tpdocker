const {Sequelize} = require('sequelize');
const config = require('./config');

const sequelize = new Sequelize(config.db,config.user,config.password,{
    host: config.host,
    port:5432,
    dialect:'postgres'
})

const db = {} 
db.Sequelize = Sequelize; 
db.sequelize = sequelize;


( async function () {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
    
})();

module.exports = db;