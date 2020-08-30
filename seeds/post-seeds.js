const { Post } = require('../models');

const postData = [
    {
        title: 'Lana Del Rey',
        post: "I hope that she makes the best music on the planet, but I don't think that is possible.",
        user_id: 3,
    },
    {
        title: 'French movie wins an Academy Award',
        post: 'This french movie is easy to watch!',
        user_id: 3,
    },
    {
        title: 'Russian magazine for intermediate readers',
        post: 'Open your heart and see like me!',
        user_id: 1,
    },
    {
        title: 'What color is the sky?',
        post: 'blue is the loneliest color',
        user_id: 5,
    },
    {
        title: 'This is a sample post',
        post: 'sample post 2',
        user_id: 4,
    },
    {
        title: 'This is a serbian post',
        post: 2,
        user_id: 7,
    },
    {
        title: 'English movies are in Hollywood!',
        post: 'I hope to watch every Academy Award winning film.',
        user_id: 5,
    },
    {
        title: 'DuoLingo!',
        post: 'Learn any language!',
        user_id: 8,
    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;