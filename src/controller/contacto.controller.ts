import { Request, Response } from "express";
import { IContactoService, IRespContact } from '../services/contacto/IContactoService';
export class ContactoController {
  constructor( private readonly contactoService:IContactoService ) {}
  public addMessage = async (req: Request, res: Response):Promise<void> => {
    try {
      const body = req.body;
      const resp = await this.contactoService.createMessage( body );
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
