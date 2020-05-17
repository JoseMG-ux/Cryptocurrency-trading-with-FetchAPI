//Creation of the Develop branch

const Cotizador = new API('your api key')//In the https://www.cryptocompare.com/cryptopian/api-keys

const ui = new Interfaz();//Interface instance (ui.js)

Cotizador.obtenerMonedasAPI();

//Read the form
const formulario = document.querySelector('#formulario');


//Eventlistener
formulario.addEventListener('submit', (e) => {
     e.preventDefault();

     //Read the selected currency
     const monedaSelect = document.querySelector('#moneda');
     const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value;

     //Read the selected cryptocurrency
     const cryptomonedaSelect = document.querySelector('#moneda');
     const cryptomonedaSeleccionada = cryptomonedaSelect.options[cryptomonedaSelect.selectedIndex].value;
     
     //check that both fields have something selected
     if(monedaSeleccionada === '' || cryptomonedaSeleccionada === ''){
          //Launch an error alert (ui.js)
          ui.mostrarMensaje('Both fields are mandatory.', 'alert bg-danger text-center');
     } else {
          //All right, check the API
     }
     console.log(monedaSeleccionada);
     console.log(cryptomonedaSeleccionada);
     
})