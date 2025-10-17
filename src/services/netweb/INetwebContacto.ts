import { INetwebContacto } from '../../model/netweb/INetwebContacto';
interface INetwebService{
    getAllMessages():Promise<any>,
    postMessage(message:INetwebContacto):Promise<any>
}

export{
    INetwebService
}