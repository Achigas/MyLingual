const { Post } = require('../models');

const postData = [
    {
        title: 'Lana Del Rey',
        post_url: "www.google.com",
        post: "I hope that she makes the best music on the planet, but I don't think that is possible.",
        user_id: 3,
    },
    {
        title: 'French movie wins an Academy Award',
        post_url: "www.google.com",
        post: 'This french movie is easy to watch!',
        user_id: 3,
    },
    {
        title: 'Russian magazine for intermediate readers',
        post_url: "www.google.com",
        post: 'Open your heart and see like me!',
        user_id: 1,
    },
    {
        title: 'What color is the sky?',
        post_url: "www.google.com",
        post: 'blue is the loneliest color',
        user_id: 5,
    },
    {
        title: 'This is a sample post',
        post_url: "www.google.com",
        post: 'sample post 2',
        user_id: 4,
    },
    {
        title: 'This is a serbian post',
        post_url: "www.google.com",
        post: 2,
        user_id: 7,
    },
    {
        title: 'English movies are in Hollywood!',
        post_url: "www.google.com",
        post: 'I hope to watch every Academy Award winning film.',
        user_id: 5,
    },
    {
        title: 'DuoLingo!',
        post_url: "www.google.com",
        post: 'Learn any language!',
        user_id: 8,
    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;