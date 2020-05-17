//Leer el formulario

const formulario = document.querySelector('#formulario');


//Eventlistener
formulario.addEventListener('submit', (e) => {
     e.preventDefault();

     //Leer la moneda seleccionada
     const monedaSelect = document.querySelector('#moneda');
     const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value;


     //Leer la criptomoneda seleccionada
     const cryptomonedaSelect = document.querySelector('#moneda');
     const cryptomonedaSeleccionada = cryptomonedaSelect.options[cryptomonedaSelect.selectedIndex].value;
     
     //comprobar que ambos campos tengan algo seleccionado
     if(monedaSeleccionada === '' || cryptomonedaSeleccionada === ''){
          //Arrojar una alerta de error
     } else {
          //Todo bien, consultar la API
     }
     console.log(monedaSeleccionada);
     console.log(cryptomonedaSeleccionada);
     
})