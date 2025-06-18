export const userError =( { message })=>{
  
    const divUserError = document.querySelector('#user-error');
    const inputEmail   = document.querySelector('#inputEmail');
    
    divUserError.innerHTML = '';
    
    const div = document.createElement('div');
    const p = document.createElement('p');

    div.classList.add('border', 'border-danger', 'bg-danger', 'mb-2', 'mt-2', 'rounded-1');
    p.classList.add('fw-medium', 'text-light', 'm-1', 'ps-1');
    p.textContent = message;
    div.appendChild( p );
    divUserError.appendChild( div );

    inputEmail.value = '';

    setTimeout(()=>{
      div.remove();
    },6000)
}
