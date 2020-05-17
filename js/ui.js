//Interfaz de usuario

class Interfaz{


     constructor(){
          this.init();

     }
     init(){
          this.construirSelect();
     }

     construirSelect(){
          Cotizador.obtenerMonedasAPI()
          .then(monedas =>{
               for (const [key, value] of Object.entries(monedas.monedas.Data)){
                    console.log(key)
               }
             
          })
     }

     //Show error message or result ...
     mostrarMensaje(mensaje, clases){
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
}