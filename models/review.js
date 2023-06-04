const Sequelize=require("sequelize")
const sequelize=require("../util/database")

const Review = sequelize.define('Review', {
    review_text: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    timestamp: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
  });

  module.exports=Review
