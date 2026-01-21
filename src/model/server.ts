import express from "express";
import {
  authRouter,
  homeRouter,
  contactoRouter,
  portafolioRouter,
  netwebRouter,
} from "../routes/index.routes";
import { dbConnection } from "../database/config.db";
import cors from "cors";
import cookieParser from "cookie-parser";

export class Server {
  private readonly app = express();
  private readonly port: number;
  private readonly sitioUno: string;
  private readonly sitioDos: string;
  private pathsWeb = {
    auth: "/auth",
    panel: "/panel",
    netweb: "/netweb",
  };

  constructor(port: number, sitioUno: string, sitioDos: string) {
    this.port = port;
    this.sitioUno = sitioUno;
    this.sitioDos = sitioDos;
    this.connectDB();
  }

  private async connectDB() {
    await dbConnection();
  }

  public start() {

      //Middleware
    this.app.use(express.json());
    this.app.use(cookieParser());
    this.app.use(cors());
    // this.app.use(
    //   cors({
    //     origin: [
    //       this.sitioUno,
    //       this.sitioDos
    //     ],
    //     methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE", "OPTIONS"],
    //      allowedHeaders: ["Content-Type"],
    //     // credentials: true,
    //     optionsSuccessStatus: 204,
    //   }),
    // );

    // Usar las rutas definidas
    this.app.use(this.pathsWeb.auth, authRouter);
    this.app.use(this.pathsWeb.panel, homeRouter);
    this.app.use(this.pathsWeb.panel, contactoRouter);
    this.app.use(this.pathsWeb.panel, portafolioRouter);

    //Ruta que sera consumida por netweb para envio de mesajes
    this.app.use(this.pathsWeb.netweb, netwebRouter);

    this.app.listen(this.port, () => {
      console.log(`Servidor levantado en puerto: ${this.port}`);
    });
  }
}
