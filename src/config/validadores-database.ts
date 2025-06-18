import { User } from '../model/auth/users';
const emailExiste = async (User_Email:string = '') => {
    const emailExiste = await User.findOne({
        where:{
            'User_Email': User_Email
        }
    });

    if( emailExiste ){
        throw new Error('Este email ya existe');
    }
}

export {
    emailExiste
}