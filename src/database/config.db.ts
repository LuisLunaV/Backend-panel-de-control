import { Sequelize } from 'sequelize';
import { MYSQLDATABASE, MYSQLHOST, MYSQLPASSWORD, MYSQLPORT, MYSQLUSER } from '../config/envs';



const db = new Sequelize( MYSQLDATABASE as string, MYSQLUSER as string, MYSQLPASSWORD as string,{
            host:     MYSQLHOST,
            port: MYSQLPORT ? Number(MYSQLPORT) :3306,
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


