class API{

     constructor(apikey) {
          this.apikey = apikey;

     }
     //get all the coins
     async obtenerMonedasAPI(){
          const url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apikey}`;
          
          //Fetch to the API
          const urlObtenerMonedas = await fetch(url);

          //Answer in JSON
          const monedas = await urlObtenerMonedas.json();


          return{
               monedas //Coins
          }
     }
}