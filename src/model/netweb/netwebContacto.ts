import { DataTypes, Model } from 'sequelize';
import { db } from '../../database/config.db';
import { INetwebContacto } from './INetwebContacto';

class NetwebContacto extends Model<INetwebContacto>{
    declare Mensaje_Id:number;
    declare Mensaje_Name:string;
    declare Mensaje_Email:string;
    declare Mensaje_Asunto:string;
    declare Mensaje_Body:boolean;
}

const sequelize = db;
NetwebContacto.init({
    Mensaje_Id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    Mensaje_Name:{
        type: DataTypes.STRING,
        allowNull:false
    },
    Mensaje_Email:{
        type: DataTypes.STRING,
        allowNull:false
    },
    Mensaje_Asunto:{
        type: DataTypes.STRING,
        allowNull:false
    }
    ,
    Mensaje_Body:{
        type: DataTypes.STRING,
        allowNull:false
    },
    Mensaje_Status:{
        type: DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:true
    }
},{
    sequelize,
    modelName: 'NetwebContacto',
    tableName: 'Netweb',
    timestamps: false,
});

export{
    NetwebContacto
}

