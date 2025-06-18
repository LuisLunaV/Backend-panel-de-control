import { DataTypes, Model } from 'sequelize';
import { db } from '../../../database/config.db';
import { IHome } from './IHome';

class Home extends Model<IHome>{
    declare Home_Id:number;
    declare Home_InitialGreeting:string;
    declare Home_ProfesionName:string;
    declare Home_Status:boolean;
}

const sequelize = db;

Home.init({
    Home_Id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    Home_InitialGreeting:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    Home_ProfesionName:{
        type: DataTypes.STRING,
        allowNull: false
    },
    Home_Status:{
        type: DataTypes.BOOLEAN,
    },
},{
    sequelize,
    modelName: 'Home',
    tableName: 'Home',
    timestamps: false,
});

export{
    Home
}