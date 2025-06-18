import { IMessage, IContactoService } from '../../services/contacto/IContactoService';
import { Contacto } from '../../model/panel/contacto/contacto';
export class ContactoServices implements IContactoService{
    public async createMessage( message:IMessage):Promise<IMessage>{
        try {
            const contacto = await Contacto.create( message );
            return contacto;
        } catch (error) {
            throw new Error('No sepudo crear el mensaje');
        }

    }
}