const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
const Category = require('./Category');
const Languages = require('.Languages');

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

Tag.belongsToMany(Languages, {
    through: Languages,
    foreignKey: 'tag_id',
});

module.exports = {
    User,
    Comment,
    Post,
    Category, 
    Languages
};