import { DataTypes, Model } from 'sequelize';
import { db } from '../../../database/config.db';
import { IContacto } from './IContacto';

class Contacto extends Model<IContacto>{
    declare Msg_Id:number;
    declare Msg_email:string;
    declare Msg_texto:string;
    declare Msg_status:boolean;
}

const sequelize = db;
Contacto.init({
    Msg_Id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    Msg_email:{
        type: DataTypes.STRING,
        allowNull:false
    },
    Msg_texto:{
        type: DataTypes.STRING,
        allowNull:false
    }
    ,
    Msg_status:{
        type: DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:true
    }
},{
    sequelize,
    modelName: 'Contacto',
    tableName: 'Mensajes',
    // timestamps: false, //Nesecitamos las fechas de creacion por eso comentamos esta linea.
});

export{
    Contacto
}

