const Sequelize = require('sequelize');

module.exports = function(sequelize,DataTypes){
    return sequelize.define("tasks",{
        idTask:{
            type: DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
        },
        description: DataTypes.TEXT
    })
}

