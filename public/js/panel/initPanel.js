import { componentesCargados } from '../utils/loader.js';
import { initHome } from './modules/inicio/initHome.js';

export const initPanel=()=>{
    componentesCargados();

    const menuPanel = document.querySelector('#navAside');
    menuPanel.addEventListener('click',( event )=>{
       
        const option = event.target.id;

        switch( option ){
        case "inicio":
            initHome();
            break;
        case "sobreMi":
            console.log('sobre_mi')
            break;
        case "servicios":
            console.log('servicios')
            break;
        case "tecnologias":
            console.log('tecnologias')
            break;
        case "companias":
            console.log('companias')
            break;
        case "puestos":
            console.log('puestos')
            break;
        case "proyectos":
            console.log('proyectos')
            break;
        case "mensajes":
            console.log('mensajes')
            break;
        }
    });
}