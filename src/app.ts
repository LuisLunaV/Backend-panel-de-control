import { Server } from './model/server';
import { PORT, SITIO_UNO, SITIO_DOS } from './config/envs';
(()=>{
    main();
})()

 async function main(){
    
    new Server( Number(PORT),SITIO_UNO!, SITIO_DOS! ).start();
 }