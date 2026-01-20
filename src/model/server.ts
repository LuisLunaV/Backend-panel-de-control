import express from "express";
import {
  authRouter,
  homeRouter,
  contactoRouter,
  portafolioRouter,
  netwebRouter
} from "../routes/index.routes";
import { dbConnection } from "../database/config.db";
import cors from "cors";
import cookieParser from "cookie-parser";
import { CLIENT_BASE_URL } from "../config/envs";

export class Server {
  private readonly app = express();
  private readonly port: number;
  private pathsWeb = {
    auth: "/auth",
    panel: "/panel",
    netweb: "/netweb",
  };

  constructor(port: number) {
    this.port = port;
    this.connectDB();
  }

  private async connectDB() {
    await dbConnection();
  }

  public start() {
    //Middleware
    this.app.use(express.json());
    this.app.use(cookieParser());
    this.app.use(
      cors({
        origin: ["https://luislunav.up.railway.app","https://netweb.up.railway.app"],
        methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
        credentials: true,
        optionsSuccessStatus: 200,
      })
    );

    // Usar las rutas definidas
    this.app.use(this.pathsWeb.auth, authRouter);
    this.app.use(this.pathsWeb.panel, homeRouter);
    this.app.use(this.pathsWeb.panel, contactoRouter);
    this.app.use(this.pathsWeb.panel, portafolioRouter);

    //Ruta que sera consumida por netweb para envio de mesajes
    this.app.use(this.pathsWeb.netweb, netwebRouter);

    this.app.listen(this.port, "0.0.0.0", () => {
      console.log(`Servidor levantado en puerto: ${this.port}`);
    });
  }
}
