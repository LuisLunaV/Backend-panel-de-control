import { Router } from 'express'; 
import { validateProperties } from '../../middlewares/validate-properties';
import { validarCaracteresMaliciosos } from '../../helpers/validadores-generales';
import { check } from 'express-validator';
import { NetWebContactoController } from '../../controller/netweb/netwebContacto.controller';
import { NetwebContactoService } from '../../services/netweb/netwebContacto.service';

const router = Router();
const netwebContactoService    = new NetwebContactoService();
const netwebContactoController = new NetWebContactoController( netwebContactoService );

router.get('/api/v1/netweb_allmessages', netwebContactoController.allMessages);
router.post('/api/v1/netweb_send',[
      check('Mensaje_Name', 'EL nombre no debe estar vacio').notEmpty().custom( (e)=>validarCaracteresMaliciosos(e,'nombre') ),
      check('Mensaje_Email', 'El email no es valido').isEmail(),
      check('Mensaje_Asunto','EL asunto no debe estar vacio').notEmpty().custom( (e)=>validarCaracteresMaliciosos(e,'asunto') ),
      check('Mensaje_Body', 'EL mensaje no debe estar vacio').notEmpty().custom( (e)=>validarCaracteresMaliciosos(e,'mensaje') ),
      validateProperties
], netwebContactoController.addMessage );

export default router;