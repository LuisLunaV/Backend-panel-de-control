import { DataTypes, Model } from 'sequelize';
import { db } from '../../database/config.db';
import { IUser } from './IUsers';

class User extends Model<IUser>{
    declare User_Id:number;
    declare User_Name: string;
    declare User_Email: string;
    declare User_Password: string;
}

const sequelize = db;

User.init({
    User_Id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },

    User_Name:{
        type: DataTypes.STRING,
        allowNull:false
    },

    User_Email:{
        type: DataTypes.STRING,
        allowNull:false,
        unique: true
    },

    User_Password:{
        type: DataTypes.STRING,
        allowNull:false
    }
}, {
    sequelize,
    modelName: 'User',
    tableName: 'Users',
    timestamps: false,
    // defaultScope:{
    //     attributes:{
    //         exclude:['User_Password']
    //     }
    // }
});

export {
    User
}