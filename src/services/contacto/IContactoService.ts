interface IMessage {
    Msg_email: string;
    Msg_texto: string;
}

interface IContactoService{
    getMessages():Promise<any>;
    createMessage( message:IMessage ):Promise<any>;
}


interface IRespContact{
    Msg_Id:    number;
    Msg_email: string;
    Msg_texto: string;
    updatedAt: Date;
    createdAt: Date;
    Msg_status: boolean;
}

export{
    IMessage,
    IContactoService,
    IRespContact
}

