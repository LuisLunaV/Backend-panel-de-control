import { ImprimirHome } from '../helper/imprimirSaludos.js';

 const imprimirHome = new ImprimirHome( inputRadioInformation );

 const inicialHTML=()=>{
    const mainInicio = document.querySelector('#panel-main');
    mainInicio.innerHTML = '';

    const divInicialContainer = document.createElement('div');
    divInicialContainer.className = 'd-flex flex-column align-items-center flex-md-row align-items-md-start w-100';
    
    divInicialContainer.appendChild( formInicialHtml() );

    divInicialContainer.appendChild( formListInicioHtml() );
    
    imprimirHome.getSaludos();
    mainInicio.appendChild( divInicialContainer );
}

// creamos pormulario principal del modulo inicial
function formInicialHtml(){

    const divInicioRigth = document.createElement('div')
    divInicioRigth.className = 'inicio-main-rigth w-50 mt-2 mx-3';

    const formInicial = document.createElement('form');
    formInicial.className = 'form-login';
    formInicial.method ='POST';
    formInicial.id = 'formInicioPost';

    const divHomeInitialGreeting = crearInputDiv('Home_InitialGreeting', 'Saludo inicial');
    const divHomeProfesionName   = crearInputDiv('Home_ProfesionName','Saludo secundario');

    const divHomeSubmit = document.createElement('div');
    divHomeSubmit.className = 'd-grid gap-2';
    const inputHomeSubmit = document.createElement('input');
    inputHomeSubmit.className = 'btn btn-outline-warning';
    inputHomeSubmit.type = 'submit';
    inputHomeSubmit.value = 'Agregar';
    divHomeSubmit.appendChild( inputHomeSubmit );

    formInicial.appendChild( divHomeInitialGreeting );
    formInicial.appendChild( divHomeProfesionName );
    formInicial.appendChild( divHomeSubmit );

    divInicioRigth.appendChild( formInicial );
    
    return divInicioRigth;

}

// function para crear los inputs de los forms
function crearInputDiv( name, placeholder){

    const div = document.createElement('div');
    div.className = 'mb-3';
    const input = document.createElement('input');
    input.className = 'form-control';
    input.type = 'text';
    input.name = `${ name }`;
    input.placeholder = `${ placeholder }`;
    input.required = true;
    div.appendChild( input );
    return div;

}

//Creamo formulario con listado de saludos agregados 
function formListInicioHtml(){
    const divListInicioLeft = document.createElement('div');
    divListInicioLeft.className = 'inicio-main-left w-50 mx-3';

    const formListInicial = document.createElement('form');
    formListInicial.method = 'POST';
    formListInicial.id = 'formInicioLista';

    const divH1 = document.createElement('div');
    divH1.className = 'mx-auto mt-5';

    const h1 = document.createElement('h1');
    h1.className = 'text-white text-center text-decoration-underline fw-bold fs-1';
    h1.textContent = 'Sin informacion.';

    divH1.appendChild(h1);
    formListInicial.appendChild( divH1 );
    divListInicioLeft.appendChild( formListInicial );
    return divListInicioLeft;
}

function inputRadioInformation( info ){
    const div = document.createElement('div');
    div.className = 'div-inicial py-2 px-3 my-2';
    div.id = `${info.Home_Id}`;

    const input = document.createElement('input');
    input.className = 'form-check-input me-1';
    input.type = 'radio';
    input.name ='listGroupRadio';
    input.id=`${ info.Home_Id }`;
    input.checked = info.Home_Status;

    const divLabel = document.createElement('div');
    divLabel.className = 'mx-2 w-100 d-flex flex-row justify-content-between';

    const saludo    = createLabel( info.Home_Id, info.Home_InitialGreeting );

    const divLabelIcon = document.createElement('div');
    divLabelIcon.className = 'w-50 d-flex flex-row justify-content-between';
    const profesion = createLabel( info.Home_Id, info.Home_ProfesionName );
    const icon = document.createElement('i');
    icon.className = 'bi bi-trash';
    icon.id = 'i-delete'

    divLabelIcon.appendChild( profesion );
    divLabelIcon.appendChild( icon );

    divLabel.appendChild( saludo );
    divLabel.appendChild( divLabelIcon );
    div.appendChild( input );
    div.appendChild( divLabel );

    return div;
}

function createLabel( id, message ){
    
    const label = document.createElement('label');
    label.className = 'form-check-label';
    label.htmlFor = `${ id }`;
    label.textContent = `${ message }`;
    return label;
}


export{
    inicialHTML,
    imprimirHome
}