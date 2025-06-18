import { Sequelize } from 'sequelize';
import { NAME_DB, HOST_DB, PASS_DB, USER_DB } from '../config/envs';



const db = new Sequelize( NAME_DB as string, USER_DB as string, PASS_DB as string,{
            host:     HOST_DB,
            dialect: 'mysql'
        });

const dbConnection = async (): Promise<void> => {
try {
    await db.authenticate();
    console.log('Conexion a la DB exitosa!!!');
} catch (error: any) {
    throw new Error(error);
}
}

export {
db,
dbConnection
}


