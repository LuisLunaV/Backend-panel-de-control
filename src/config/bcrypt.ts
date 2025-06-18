import { hashSync, compareSync, genSaltSync } from 'bcryptjs';

export class BcryptAdapter{
    static hash(password:string):string{
        const salt = genSaltSync(10);
        return hashSync( password, salt );
    }
    static compare(password:string, hashPassword:string):boolean{
        return compareSync( password, hashPassword);
    }
}