import { registerUser } from '../services/api-post.js';
import { messageErrorPassword, messageErrors } from '../components/messageError.js';
import { messageSucces } from '../components/messageSucces.js';


export const formRegisterEvent = async()=>{
const formRegister = document.querySelector('#formularioRegister');
const inputs = formRegister.querySelectorAll('input');

const clearInputs=()=> inputs.forEach( element => element.value = '' );

formRegister.addEventListener('submit', async( e )=>{
    e.preventDefault();
    /* Creamos el payload para enviar los datos*/
    const formData = new FormData( e.target );
    const data = Object.fromEntries(formData.entries());

    /* Comparamos los campos de password si son iguaales*/
    const isEqual = comparePassword(data);

    if( !isEqual ){
        const message = 'Los passwords no coinciden, verifica nuevamente.';
        messageErrorPassword( message, inputs );
        return;
    }


    try {
        const resp = await registerUser({
            User_Email:data.User_Email,
            User_Name:data.User_Name,
            User_Password:data.User_Password,
        });
        console.log(resp)
        messageSucces(resp, inputs);
        clearInputs();
    } catch (error) {
        messageErrors( error, inputs );
    }
});
}

function comparePassword( data ){
    return ( data.User_Password != data.Password_dos)? false:true;
}

