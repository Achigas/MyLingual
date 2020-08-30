const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
const Languages = require('./Languages');

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

User.belongsTo(Languages, {
    foreignKey: 'language_id'
});

Languages.hasMany(User, {
    foreignKey: 'language_id'
});

module.exports = {
    User,
    Comment,
    Post, 
    Languages
};