const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
const Languages = require('./Languages');

Post.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
    foreignKey: 'postId',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

Post.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

User.belongsTo(Language, {
    foreignKey: 'language_id'
});

Language.hasMany(Users, {
    foreignKey: 'language_id'
});

module.exports = {
    User,
    Comment,
    Post, 
    Languages
};