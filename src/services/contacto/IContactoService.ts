interface IMessage {
    Msg_email: string;
    Msg_texto: string;
}

interface IContactoService{
    createMessage( message:IMessage ):Promise<any>;
}


interface IRespContact{
    Msg_Id:    number;
    Msg_email: string;
    Msg_texto: string;
    updatedAt: Date;
    createdAt: Date;
}

export{
    IMessage,
    IContactoService,
    IRespContact
}

