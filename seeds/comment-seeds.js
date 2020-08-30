const { Comment } = require('../models');

const commentData = [
    {
        comment_text: 'Great post!',
        user_id: 2,
        post_id: 8,
    },
    {
        comment_text: 'OMG BEY I DID NOT KNOW THIS EXISTED',
        user_id: 1,
        post_id: 1,
    },
    {
        comment_text: 'This film is magical',
        user_id: 5,
        post_id: 1,
    },
    {
        comment_text: 'Happy Birthday',
        user_id: 6,
        post_id: 2,
    },
    {
        comment_text: 'True things but hard to understand',
        user_id: 7,
        post_id: 3,
    },
    {
        comment_text: 'What are we doing?',
        user_id: 8,
        post_id: 4,
    },
    {
        comment_text: 'I want to learn EVERY language!',
        user_id: 1,
        post_id: 4,
    },
    {
        comment_text: 'Frida is Free',
        user_id: 2,
        post_id: 1,
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;