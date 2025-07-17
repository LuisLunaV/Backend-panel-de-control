import { Router, Request, Response} from 'express';
import { ContactoController } from '../../controller/contacto.controller';
import { validateJWT } from '../../middlewares/validate-jwt';
import { validateProperties } from '../../middlewares/validate-properties';
import { validarMensaje } from '../../helpers/validadores-generales';
import { check, param } from 'express-validator';
import { ContactoServices } from '../../services/contacto/contacto.service';

const router = Router();
const contactoServicio = new ContactoServices();
const contactoController = new ContactoController( contactoServicio );

router.get('/api/v1/bandeja/all-messages',[
    validateJWT,
    validateProperties
],contactoController.getMessages);

router.get('/api/v1/bandeja/contenido-msg/:id',
    param('id').isInt(),[
    validateJWT,
    validateProperties
],contactoController.getMessageId);

router.post('/api/v1/form-messages/send', [
    check('Msg_email', 'El email no es valido').isEmail(),
    check('Msg_texto', 'EL mensaje no debe estar vacio').notEmpty().custom( validarMensaje ),
    validateProperties
], contactoController.addMessage);

router.delete('/api/v1/bandeja/delete-msg/:id',
param('id').isInt(),[
    validateJWT,
    validateProperties
],contactoController.deleteMessage );

export default router;