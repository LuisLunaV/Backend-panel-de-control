import { Server } from './model/server';
import { PORT } from './config/envs';
(()=>{
    main();
})()

 async function main(){
    
    new Server( Number(PORT) ).start();
 }