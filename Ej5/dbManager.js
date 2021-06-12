import Sequelize from 'sequelize';


const sequelize = new Sequelize('7_game', 'root', 'recuerda', {
    host: 'localhost',
    dialect: 'mariadb'
});

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

try {
    await User.sync({ force: true });
    console.log("The table for the User model was just (re)created!");
} catch (error){
    console.error('Unable to create the Users table');
}

export default sequelize;