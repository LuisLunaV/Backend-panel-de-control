import { Request, Response } from "express";
import { IContactoService, IRespContact } from '../services/contacto/IContactoService';
export class ContactoController {
  constructor( private readonly contactoService:IContactoService ) {}

  public getMessages = async( req:Request, res:Response ): Promise<void>=>{
    try {
      console.log('desde mensajes all')
      const mensajes = await this.contactoService.getMessages();
      res.status(200).json({
        status:200,
        mensajes
      })
    } catch (error) {
      res.status(500).json({
        Error: 'No se obtuvieron los mensajes'
      })
    }
  }

  public addMessage = async (req: Request, res: Response):Promise<void> => {
    try {
      const body = req.body;
      
      await this.contactoService.createMessage( body );
      
      res.status(201).json({
        status:201,
        create:'ok',
        msg: 'El mensaje se ha enviado correctamente.'
      });
    } catch (error) {
      res.status(500).json({
        Error: `Internal server error. ${error}`,
      });
    }
  };
}
