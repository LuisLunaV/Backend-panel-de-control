import { Server } from './model/server';
import { MYSQLPORT } from './config/envs';
(()=>{
    main();
})()

 async function main(){
    
    new Server( Number(MYSQLPORT) ).start();
 }