const User = require('./User');
const Videogame = require('./Videogame');
const Reviews = require('./Review')

User.belongsToMany(Videogame, {
    through: 'user_games', 
    onDelete: 'CASCADE'
});

Videogame.belongsToMany(User, {
    through: 'user_games'
});

User.hasMany(Reviews, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

module.exports = { User, Videogame, Reviews}

