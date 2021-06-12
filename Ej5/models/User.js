import { DataTypes, Model } from 'sequelize';
import sequelize from '../dbManager.js';

export default class User extends Model {}
    
User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "Anònim"
    }
}, {
    sequelize,
    modelName: "User"
});