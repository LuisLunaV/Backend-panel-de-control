import { Router, Request, Response } from "express";
import { Contacto } from "../../model/panel/contacto/contacto";

const router = Router();

router.get("/api/v1/bandeja", async function (req: Request, res: Response): Promise<any> {
  try {
    const isOnline = await Contacto.findOne();
 
    if (!isOnline) {
      return res.status(404).json({
        status: false,
      });
    }

    res.status(200).json({
      status: true,
    });
    
  } catch (error) {
    res.status(500).json({
      Error: "No se obtuvieron los mensajes",
    });
  }
});

export default router;
