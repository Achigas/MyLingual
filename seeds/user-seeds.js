const { User } = require('../models');

const userData = [
    {
        username: 'QueenBey',
        password: '123456AB',
        language: 4,
    },
    {
        username: 'Laura',
        password: 'Trees123',
        language: 2,
    },
    {
        username: 'MrCheese',
        password: 'Gouda1454',
        language: 1,
    },
    {
        username: 'ACDC',
        password: 'Trips2123',
        language: 1,
    },
    {
        username: 'Karma',
        password: 'WatchMe',
        language: 2,
    },
    {
        username: 'Learning212',
        password: 2,
        language: 4,
    },
    {
        username: 'Batman',
        password: 'Robin',
        language: 3,
    },
    {
        username: 'Robin',
        password: 'Batman',
        language: 2,
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;