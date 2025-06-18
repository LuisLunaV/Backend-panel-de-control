export const patchInformation = async(id, url)=>{
    try {
        const resp = await fetch(`${url}${id}`,{
            method: 'PATCH',
            credentials: 'include'
        });
    
        if( resp.ok ){
            const data = await resp.json();
            return data;
        }else{
            const error = await resp.json();
            throw error;
        }
    } catch (error) {
        throw error ;   
    }
    }