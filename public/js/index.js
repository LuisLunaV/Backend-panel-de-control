import { initLogin } from './auth/login/initLogin.js';
import { initRegister } from './auth/register/initRegister.js';
import { initPanel } from './panel/initPanel.js';
const RUTA_LOGIN    = '/auth/login';
const RUTA_REGISTER = '/auth/register';
const RUTA_PANEL    = '/panel';



const manejoDeRutas=( ventanaActual )=>{
    
    switch ( ventanaActual ) {
        case RUTA_LOGIN:
             initLogin()
            break;
        case RUTA_REGISTER:
            initRegister();
        break;
        case RUTA_PANEL:
            initPanel();
        break;
        default:
            break;
    }
}

window.onload=()=>{
    const ventanaActual = window.location.pathname;
    manejoDeRutas( ventanaActual );
}