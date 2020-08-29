const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
const Category = require('./Category');

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

Post.belongsTo(Category, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

module.exports = {
    User,
    Comment,
    Post, 
    Category
};