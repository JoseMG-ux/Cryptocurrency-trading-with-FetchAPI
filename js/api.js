class API {
  constructor(apikey) {
    this.apikey = apikey;
  }
  //get all the coins
  async obtenerMonedasAPI() {
    const url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apikey}`;

    //Fetch to the API
    const urlObtenerMonedas = await fetch(url);

    //Answer in JSON
    const monedas = await urlObtenerMonedas.json();

    return {
      monedas, //Coins
    }
  }

  async obtenerValores(moneda, criptomoneda) {
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}&api_key=${this.apikey}`;

    //Consultar en rest API

    const urlConvertir = await fetch(url);
    const resultado = await urlConvertir.json();

    return {
      resultado,
    }
  }
}
