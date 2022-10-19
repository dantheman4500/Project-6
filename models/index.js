const User = require('./User');
const Videogame = require('./Videogame');

User.hasMany(Videogame, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// Videogame.belongsToMany(User, {
//     foreignKey: 'user_id'
// });

// User.hasMany(Review, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE'
// });
module.exports = { User, Videogame }