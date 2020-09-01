const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
const Language = require('./Language');

User.hasMany(Post, {
    foreignKey: 'user_id'
});

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

Language.hasMany(User, {
    foreignKey: 'language_id'
});

module.exports = {
    User,
    Comment,
    Post, 
    Language
};