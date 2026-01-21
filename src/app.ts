import { Server } from './model/server';
import { MYSQLPORT, SITIO_UNO, SITIO_DOS } from './config/envs';
(()=>{
    main();
})()

 async function main(){
    
    new Server( Number(MYSQLPORT),SITIO_UNO!, SITIO_DOS! ).start();
 }