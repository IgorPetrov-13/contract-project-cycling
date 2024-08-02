'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Users', [{
      name: 'Natasha',
      email: 'nata@mail.ru',
      password: '123'

    },
    {
      name: 'Айгиз',
      email: 'айгиз@mail.ru',
      password: '123'

    },
    {
      name: 'Игорь',
      email: 'игорь@mail.ru',
      password: '123'

    },

    ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Users', null, {});

  }
};
