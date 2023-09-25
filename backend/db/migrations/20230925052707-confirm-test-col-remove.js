'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Users', 'testId');
  },

  async down(queryInterface, Sequelize) {

  }
};
