import { Router } from 'express';
import { HomeController } from '../../controller/home.controller';
import { HomeServices } from '../../services/home/home.service'
import { validateJWT } from '../../middlewares/validate-jwt';
import { validateProperties } from '../../middlewares/validate-properties';


const router = Router();

const homeService    = new HomeServices();
const homeController = new HomeController( homeService );

router.get('/api/v1/home',[
    validateJWT,
    validateProperties
],homeController.allMessages );

router.post('/api/v1/home',[
    validateJWT,
    validateProperties
],homeController.addMessages );

router.patch('/api/v1/home/:id',[
    validateJWT,
    validateProperties
], homeController.patchMessage);

router.delete('/api/v1/home/:id',[
    validateJWT,
    validateProperties
], homeController.deleteMessage);
export default router;