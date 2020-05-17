//Interfaz de usuario

class Interfaz{

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