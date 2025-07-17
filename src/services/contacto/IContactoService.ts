interface IMessage {
    Msg_email: string;
    Msg_texto: string;
}

interface IContactoService{
    getMessages():Promise<any>;
    getMessageSelect(id:number):Promise<any>;
    createMessage( message:IMessage ):Promise<any>;
    eliminarMensaje(id: number):Promise<any>;
}


interface IRespContact{
    Msg_Id:    number;
    Msg_email: string;
    Msg_texto: string;
    updatedAt: Date;
    createdAt: Date;
    Msg_status: boolean;
}

interface IRespMessageId {
  Msg_Id: number;
  Msg_email: string;
  Msg_texto: string;
  Msg_status: boolean;
}


export{
    IMessage,
    IContactoService,
    IRespContact,
    IRespMessageId
}

