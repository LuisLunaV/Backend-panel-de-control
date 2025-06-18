export const passwordError =( { message })=>{
  
    const divPasswordError  = document.querySelector('#password-error');
    const inputPassword = document.querySelector('#inputPassword');

    divPasswordError.innerHTML = '';
    
    const div = document.createElement('div');
    const p = document.createElement('p');

    div.classList.add('border', 'border-danger', 'bg-danger', 'mb-2', 'mt-2', 'rounded-1');
    p.classList.add('fw-medium', 'text-light', 'm-1', 'ps-1');
    p.textContent = message;
    div.appendChild( p );
    divPasswordError.appendChild( div );

    inputPassword.value = '';

    setTimeout(()=>{
      div.remove();
    },6000)
}
