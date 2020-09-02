const { User } = require('../models');

const userData = [
    {
        username: 'QueenBey',
        password: '123456AB',
        language_id: 4,
    },
    {
        username: 'Laura',
        password: 'Trees123',
        language_id: 2,
    },
    {
        username: 'MrCheese',
        password: 'Gouda1454',
        language_id: 1,
    },
    {
        username: 'ACDC',
        password: 'Trips2123',
        language_id: 1,
    },
    {
        username: 'Karma',
        password: 'WatchMe',
        language_id: 2,
    },
    {
        username: 'Learning212',
        password: 'Shoot1234',
        language_id: 4,
    },
    {
        username: 'Batman',
        password: 'Robin',
        language_id: 3,
    },
    {
        username: 'Robin',
        password: 'Batman',
        language_id: 2,
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;