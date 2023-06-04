const Sequelize=require("sequelize")

const sequelize = require("../util/database");

const Restaurant=sequelize.define("Restaurant",{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    address:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    description:{
        type: Sequelize.TEXT,
        allowNull: false,
    }
})

module.exports=Restaurant