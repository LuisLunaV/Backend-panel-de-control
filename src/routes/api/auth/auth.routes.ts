import { Router, Request, Response } from 'express';
import { check } from 'express-validator';
import { validateJWT } from '../../../middlewares/validate-jwt';
import { validateProperties } from '../../../middlewares/validate-properties';
import { emailExiste } from '../../../config/validadores-database';
import { AuthController } from '../../../controller/auth/auth.controller';

const router = Router();

router.post('/api/v1/register',[
    check('User_Name', 'El campo nombre es obligatorio').not().isEmpty(),
    check('User_Email', 'El email no es valido').isEmail().custom( emailExiste ),
    check('User_Password', 'El password es obligatorio')
    .not().isEmpty()
    .isLength({min:10}).withMessage('El password debe tener minimo 10 caracteres')
    .matches(/[0-9]/).withMessage('Agrega almenos un valor numerico')
    .matches(/[\W_]/).withMessage('Agrega almenos un caracter especial:$@%_!?'),
    validateProperties
], AuthController.register);

router.post('/api/v1/login',[
    check('User_Email', 'El email es obligatorio').isEmail(),
    check('User_Password', 'El password es obligatorio').not().isEmpty(),
    validateProperties
], AuthController.login );

router.get('/api/v1/validate-token',[
    validateJWT,
    validateProperties   
],(req: Request, res:Response )=>{
try {
    res.status(200).json({
            acceso:true,
            msg: 'Token valido'
    });
} catch (error) {
    res.status(500).json({
        Error: `Internal server error. ${error}`,
      });
}
})

router.post('/api/v1/logout', AuthController.logout)
export default router;