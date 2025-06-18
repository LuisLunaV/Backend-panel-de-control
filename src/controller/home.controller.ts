import { Request, Response } from "express";
import { IHomeService } from "../services/home/IHomeServices";

export class HomeController {
  constructor(private readonly homeService: IHomeService) {}

  public allMessages = async (req: Request, res: Response): Promise<any> => {
    const allHomeInfo = await this.homeService.getHome();

    return res.status(200).json({
      allHomeInfo,
    });
  };

  public addMessages = async (req: Request, res: Response): Promise<void> => {
    try {
      const body = req.body;

      await this.homeService.allsStatusFalseHome(); // -> Pasamos todos los status de los registros a false 

      const home = await this.homeService.createHome(body); // -> Creamos el nuevo registro con status en true

      res.status(201).json({
        home,
      });
    } catch (error) {
      res.status(500).json({
        Error: `Internal server error. ${error}`,
      });
    }
  };

  public patchMessage = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = parseInt(req.params.id);
      await this.homeService.allsStatusFalseHome();
      const  resp = await this.homeService.patchStatusHome(id);
      res.status(201).json({
        resp,
      });
    } catch (error) {
      res.status(500).json({
        Error: `Internal server error. ${error}`,
      });
    }
  };

  public deleteMessage = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = parseInt( req.params.id );
      const resp = await this.homeService.deleteRegisterHome( id );
      res.status(201).json({
        msg: `Elemento ${id} eliminado`,
        resp
      });
    } catch (error) {
      res.status(500).json({
        Error: `Internal server error. ${error}`,
      });
    }
  };
}
