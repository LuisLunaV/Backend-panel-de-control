export const loginUser= async( payload )=>{
    try {
        const resp = await fetch('/auth/api/v1/login',{
            method: 'POST',
            body: JSON.stringify( payload ),
            headers:{
                "Content-Type": "application/json"
            },
            credentials: "include" //-> Enviamos el token en cache
        });
        if ( resp.ok ) {
            const data = await resp.json();
            
            if( data.redirect ){
                window.location.href = data.redirect;
            }

            return data;
        }else{
            const error = await resp.json();            
            throw error;
        }
    } catch (error) {
        throw error ;
    }
}