'use strict';

module.exports = {

  up: function (queryInterface, Sequelize) {  
    
    return queryInterface.createTable('logs', { 
      
      id: {
        type:          Sequelize.INTEGER,
        primaryKey:    true,
        autoIncrement: true
      },
      
      level: {
        type:         Sequelize.STRING,
        defaultValue: false,
        allowNull:    false
      },

      ip: {
        type:      Sequelize.STRING,
        allowNull: false
      },

      message: {
        type:      Sequelize.TEXT,
        allowNull: false
      },

      ceatedAt: {
        type:         Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull:    false
      }
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('logs');
  }
};
