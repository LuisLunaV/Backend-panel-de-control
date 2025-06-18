import { Request, Response, NextFunction } from 'express';
import { JwtAdapter } from '../config/jwt';
import { User } from '../model/auth/users';
export const validateJWT = async(req:Request, res:Response, next:NextFunction):Promise<any> =>{
    const token = req.cookies['x-token'];
    if( !token ){
           return res.redirect('/login');
    }

    try {
       const data = await JwtAdapter.validarToken<{ id: number }>(token);

       if (!data || !data.id) {
        return res.status(401).json({
            message: 'Token inválido o no contiene un ID',
        });
    }

       await User.findByPk( data.id );

    } catch (error) {
        return res.status(401).json({
            message: 'Token no valido'
        });
    }


    next();
}