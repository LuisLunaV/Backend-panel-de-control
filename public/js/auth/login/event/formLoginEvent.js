    import { loginUser } from '../services/api-post.js';
    import { userError } from '../components/userError.js';
    import { passwordError } from '../components/passwordError.js';
    export const formLoginEvent=()=>{
        const formLogin = document.querySelector('#formularioLogin');
        const inputs = formLogin.querySelectorAll('input');

        const clearInput=()=> inputs.forEach(element => { element.value = '' });
        
        formLogin.addEventListener('submit', async( e )=>{
            e.preventDefault();

            const formData = new FormData( e.target );
            const data = Object.fromEntries(formData.entries());
            
            try {

            await loginUser(data);
            clearInput();

            } catch (error){

                (error.campo != 'password' ) ?
                userError( error ):
                passwordError( error );     

            }

        });
    }