import express from 'express';
import {  authRouter, homeRouter, contactoRouter } from '../routes/index.routes';
import { dbConnection } from '../database/config.db';
import cors from 'cors';
import cookieParser from 'cookie-parser'
import { CLIENT_BASE_URL } from '../config/envs'

export class Server{
    private readonly app = express();
    private readonly port:number;
    private pathsWeb = {
        auth: '/auth',
        panel: '/panel'
    }
   
    constructor( port:number ){
        this.port = port;
        this.connectDB();
    }

     private async connectDB(){
                await dbConnection();
    } 

    
    public start(){

    //Middleware
    this.app.use(express.json());
    this.app.use(cookieParser());
    this.app.use(cors({
        origin: [CLIENT_BASE_URL as string, 'http://localhost:5173'], 
        methods: ['GET','HEAD','PUT','PATCH','POST','DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true, 
        optionsSuccessStatus: 200, 
    }));

    // Usar las rutas definidas    
    this.app.use( this.pathsWeb.auth, authRouter);
    this.app.use( this.pathsWeb.panel, homeRouter);
    this.app.use( this.pathsWeb.panel, contactoRouter);

    
    this.app.listen(this.port,'0.0.0.0',()=>{
        console.log(`Servidor levantado en puerto: ${this.port}`)
    });
   }
}