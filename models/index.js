const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
const Language = require('./Language');

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

User.belongsTo(Language, {
    foreignKey: 'language_id'
});

Language.hasMany(User, {
    foreignKey: 'language_id'
});

module.exports = {
    User,
    Comment,
    Post, 
    Language
};