console.log ("Ok")

const valorTicket = 200;


let estudiantes = 0.8 ;
let trainee = 0.5 ;
let junior = 0.15;

const calcular = document.querySelector ('#total');
const form = document.getElementById ("formulario");
const cantidad = document.querySelector ("#cant");
const categoria = document.querySelector ("#cat");
const valor = document.querySelector ('h2');
const reset = document.querySelector ('#reset');

function pago_total () {
let totalValor = parseInt (cantidad.value) * valorTicket;

if (categoria.value == 1) {
  totalValor = totalValor -(totalValor * estudiantes)
}
else if (categoria.value == 2) {
  totalValor = totalValor - (totalValor * trainee)
}
else if (categoria.value == 3) {
  totalValor = totalValor - (totalValor * junior)
}
else {
  totalValor = totalValor
}
 valor.innerHTML = totalValor;
}

calcular.addEventListener ('click',pago_total);

reset.addEventListener ('click', () => valor.innerHTML = (''));


 form.addEventListener ("submit",(event) =>
  event.preventDefault());

 
//    if (categoria.value = '1') {desc = 0.2}
    
//    else if (categoria.value = '2') {desc = 0.5}
    
//    else if (categoria.value = '3') {desc = 0.85}

//   else {desc = 1};

//   costo =cant*desc*entrada;
//   console.log(desc)
//   valor.innerText = costo;
//   })


//   function calcularvalor (){
//    let d = (alertanombre.Value);
   
//       if (n = ' ') {
 
//     alert ('Ingrese su nombre') }
//  };

// calcular.addEventListener ("click", costo);
