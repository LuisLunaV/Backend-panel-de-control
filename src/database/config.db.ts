import { Sequelize } from 'sequelize';
// import { NAME_DB, HOST_DB, PASS_DB, USER_DB } from '../config/envs';
import { 
    MYSQLHOST,
MYSQLDATABASE,
MYSQLUSER,
MYSQLPASSWORD
 } from '../config/envs';



const db = new Sequelize( MYSQLDATABASE as string, MYSQLUSER as string, MYSQLPASSWORD as string,{
            host:     MYSQLHOST,
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


