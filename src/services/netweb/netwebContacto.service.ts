import { INetwebService } from './INetwebContacto';
import { INetwebContacto } from '../../model/netweb/INetwebContacto';
import { NetwebContacto } from '../../model/netweb/netwebContacto';
export class NetwebContactoService implements INetwebService{
  
    public async getAllMessages():Promise<any>{
        try {
           const messages = await NetwebContacto.findAll();
            return messages;
        } catch (error) {
         throw new Error('No se pudieron obtener los mensajes:' + error);
        }
    }

    public async postMessage( message:INetwebContacto):Promise<{ status:number, result:any}>{
        try {

            const netWebContacto = await NetwebContacto.create( message );

            return {
                status:201,
                result: netWebContacto
            };
        } catch (error) {
            throw new Error('No se pudo crear el mensaje:' + error);
        }
    }
}