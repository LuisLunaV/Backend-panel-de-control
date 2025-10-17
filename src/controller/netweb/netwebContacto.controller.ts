import { Request, Response } from "express";
import { INetwebService } from '../../services/netweb/INetwebContacto';
export class NetWebContactoController{
    constructor( private readonly netwebContactoService:INetwebService){}
    public allMessages = async( req:Request, res:Response ):Promise<void>=>{
        const result = await this.netwebContactoService.getAllMessages();

        res.status(200).json({
            result
        });
    }

    public addMessage= async( req:Request, res:Response ):Promise<void>=>{
        try{
         
        const body = req.body;

        const messageCreate = await this.netwebContactoService.postMessage( body );

        res.status(201).json({
          messageCreate
        });

        }catch( error:any ){
        res.status(500).json({
        success: false,
        message: error.message || "Error interno del servidor",
      });
        }
     
    }
}