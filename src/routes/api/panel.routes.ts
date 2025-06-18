import { Router } from 'express';
import { validateJWT } from '../../middlewares/validate-jwt';
import { validateProperties } from '../../middlewares/validate-properties';
// import { PanelController } from '../../controller/panel.controller';
const router = Router();

// router.get('/',[
//     validateJWT,
//     validateProperties
// ],PanelController.panelRender);

export default router;