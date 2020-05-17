//Creation of the Develop branch
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
          //Launch an error alert

     } else {
          //All right, check the API
     }
     console.log(monedaSeleccionada);
     console.log(cryptomonedaSeleccionada);
     
})