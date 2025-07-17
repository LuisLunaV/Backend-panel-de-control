import { Request, Response } from "express";
import {
  IContactoService,
  IRespContact,
} from "../services/contacto/IContactoService";
export class ContactoController {
  constructor(private readonly contactoService: IContactoService) {}

  public getMessages = async (req: Request, res: Response): Promise<void> => {
    try {
      const mensajes = await this.contactoService.getMessages();
      res.status(200).json({
        status: 200,
        mensajes,
      });
    } catch (error) {
      res.status(500).json({
        Error: "No se obtuvieron los mensajes",
      });
    }
  };

  public getMessageId = async (req: Request, res: Response): Promise<void | any> => {
    try {
      const id: number = Number(req.params.id);
      const mensaje = await this.contactoService.getMessageSelect(id);
      // if()
      res.status(200).json({
        status: 200,
        msg: "ok",
        mensaje
      });
    } catch ( error ) {
      if( error instanceof Error ){
     return res.status(404).json({
        status:404,
        msg:error.message
      });
      }
      res.status(500).json({
        Error: `Internal server error. ${error}`,
      });
    }
  };

  public addMessage = async (req: Request, res: Response): Promise<void> => {
    try {
      const body = req.body;

      await this.contactoService.createMessage(body);

      res.status(201).json({
        status: 201,
        create: "ok",
        msg: "El mensaje se ha enviado correctamente.",
      });
    } catch (error) {
      res.status(500).json({
        Error: `Internal server error. ${error}`,
      });
    }
  };

  public deleteMessage = async( req: Request, res: Response ):Promise<void|any>=>{
    try {
      const id:number = Number(req.params.id);
      const resp = await this.contactoService.eliminarMensaje( id );

      res.status(200).json({
        status:200,
        resp
      })
    } catch (error) {
      if( error instanceof Error ){
       return res.status(400).json({
          Error:error.message
        })
      }
      res.status(500).json({
        Error: `Internal server error. ${error}`,
      });
    }
  }
}
