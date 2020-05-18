//Interfaz de usuario

class Interfaz {
  constructor() {
    this.init();
  }
  init() {
    this.construirSelect();
  }

  construirSelect() {
    Cotizador.obtenerMonedasAPI()
    .then(monedas => {

      //Select the selection and create it
      const select = document.querySelector('#criptomoneda');

      //Iterate for API results
      for(const [key, value] of Object.entries(monedas.monedas.Data)) {
        //Add symbol and name as options
        const opcion = document.createElement('option');
        opcion.value = value.Symbol;
        opcion.appendChild(document.createTextNode(value.CoinName));
        select.appendChild(opcion);
      }
    })
  }

  //Show error message or result ...
  mostrarMensaje(mensaje, clases) {
    const div = document.createElement('div');
    div.className = clases;
    div.appendChild(document.createTextNode(mensaje));

    //Select messages
    const divMensaje = document.querySelector('.mensajes');
    divMensaje.appendChild(div);

    //Show content
    setTimeout(() => {
      document.querySelector('.mensajes div').remove();
    }, 3000);
  }

  //Print the result of the quote
  mostrarResultado(resultado, moneda, crypto) {
    const datosMonedas = resultado[crypto][moneda];

    console.log(datosMonedas);
    //Reduce price digits
     let precio = datosMonedas.PRICE.toFixed(2),//shorten the decimals to 2
      porcentaje = datosMonedas.CHANGEPCTDAY.toFixed(2),//Shows the variation of the last day.
      actualizado = new Date(datosMonedas.LASTUPDATE * 1000).toLocaleDateString('es-PA');//Show the last update
      //('es-PA) is the code of date in ur country 


    //Build template
    let templateHTML = `
     <div class="card bg-warning">
          <div class="card-body text-light">
               <h2 class="card-title">Resultado:</h2>
               <p>El Precio de ${datosMonedas.FROMSYMBOL} a moneda ${datosMonedas.TOSYMBOL} es de: ${precio}</p>

               <p>Variacion del ultimo dia: % ${porcentaje}</p>
               <p>Ultima actualizacion: ${actualizado}</p>
          
          </div>
     </div>
    `;

    //Insert Result

    document.querySelector("#resultado").innerHTML = templateHTML;
  }
}
