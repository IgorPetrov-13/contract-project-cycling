'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Roads', [
      {
        title:'один',
        map: 'map1',
        length: 15,
        city: 'spb',
        description: 'qweethrtetrhrergdfbg',
        userId: 1
      },
      {title:'два',
        map: 'map2',
        length: 8,
        city: 'moskow',
        description: 'qweethtrdfbg',
        userId: 2
      },
      {title:'три',
        map: 'map3',
        length: 7,
        city: 'erevan',
        description: 'qrghtyjtyjtygdfbg',
        userId: 3
      },
      {title:'четыре',
        map: 'map4',
        length: 3,
        city: 'sochi',
        description: 'qwejytjtyhtrgdfbg',
        userId: 2
      }



    ], {});

  },

  async down(queryInterface, Sequelize) {


    await queryInterface.bulkDelete('Roads', null, {});

  }
};
