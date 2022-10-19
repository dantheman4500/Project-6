const User = require('./User');
const Videogame = require('./Videogame');
const Reviews = require('./Review')

User.belongsToMany(Videogame, {
    through: 'user_games', 
    onDelete: 'CASCADE'
});

<<<<<<< HEAD
// Videogame.belongsToMany(User, {
//     foreignKey: 'user_id'
// });

// User.hasMany(Review, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE'
// });
module.exports = { User, Videogame }
=======
Videogame.belongsToMany(User, {
    through: 'user_games'
});

User.hasMany(Reviews, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

module.exports = { User, Videogame, Reviews}
>>>>>>> 964f8177a0b59781f6c6fbb9c09618c4f2c559f5
