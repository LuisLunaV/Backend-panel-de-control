import { IMessage, IContactoService } from '../../services/contacto/IContactoService';
import { Contacto } from '../../model/panel/contacto/contacto';
export class ContactoServices implements IContactoService{

    public async getMessages(): Promise<any>{
        try{
           const mensajes = await Contacto.findAll();
           return mensajes;
        }catch(error){
            throw new Error('No se pudieron obtener los mensajes!')
        }
    }
    
    public async createMessage( message:IMessage):Promise<IMessage>{
        try {
            const contacto = await Contacto.create( message );
            return contacto;
        } catch (error) {
            throw new Error('No sepudo crear el mensaje');
        }

    }
}