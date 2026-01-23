import {
  IMessage,
  IContactoService,
  IRespMessageId,
} from "../../services/contacto/IContactoService";
import { Contacto } from "../../model/panel/contacto/contacto";
import { where } from "sequelize";

export class ContactoServices implements IContactoService {
  public async getMessages(): Promise<any> {
    try {
      const mensajes = await Contacto.findAll({
        //attributes-> nos permite seleccionar las columnas de una tabla: select colmUno, columnDos from Tabla;
        attributes: ["Msg_Id", "Msg_email"],
        where: {
          Msg_status: true,
        },
      });
      return mensajes;
    } catch (error) {
      throw new Error("No se pudieron obtener los mensajes!");
    }
  }

  public async getMessageSelect(id: number): Promise<any> {
    const mensaje: IRespMessageId | null = await Contacto.findByPk(id);

    if (!mensaje || !mensaje?.Msg_status) {
      throw new Error(`No existe ningun mensaje con id: ${id}`);
    }
    const { Msg_Id, Msg_texto } = mensaje;
    return {
      Msg_Id,
      Msg_texto,
    };
  }

  public async createMessage(message: IMessage): Promise<IMessage> {
    try {
      const contacto = await Contacto.create(message);
      return contacto;
    } catch (error) {
      throw new Error("No sepudo crear el mensaje. Intentalo nuevamente mas tarde. :(");
    }
  }

  public async eliminarMensaje(id: number):Promise<any>{
    const resp = await Contacto.update(
      { Msg_status: false }, //Update
      {
        where: {
          Msg_Id: id, //Condicion
        },
      }
    );

    if(resp[0] === 0){
      throw new Error(`No existe ningun mensaje con id:${ id }`);
    }

    return resp;
  }
}
