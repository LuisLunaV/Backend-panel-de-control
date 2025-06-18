export const registerUser = async( payload )=>{
  try {
    const resp = await fetch('/auth/api/v1/register',{
        method: 'POST',
        body: JSON.stringify( payload ),
        headers:{
            "Content-Type": "application/json"
        },
        credentials: "include" //-> Enviamos el token en cache
    });

    if (resp.ok){
        const data = await resp.json();
        return data;
    }else{
        const { errors } = await resp.json();
        throw errors[0];
    }
  } catch (error) {
    throw error;
  }
}