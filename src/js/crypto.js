export default class CryptoService {
  static getCrypto() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://api.nomics.com/v1/currencies/ticker?key=${process.env.NOMICS_API_KEY}&ids=BTC,ETH,XRP,LTC&sort=rank&interval=1d,30d&per-page=100&page=1`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);          
        } else  {
          reject(request.response);
        }
      }; 
      request.open("GET", url, true);
      request.send();
    });
  }
}  


// API key : 3a16472b5bf3fbb599978d9bef047c80fe874234


// Currency ticker : curl "https://api.nomics.com/v1/currencies/ticker?key=your-key-here&ids=BTC,ETH,XRP&interval=1d,30d&convert=EUR&per-page=100&page=1"
// Market :  "https://api.nomics.com/v1/markets?key=your-key-here&exchange=binance&base=BTC,ETH,LTC,XMR&quote=BTC,ETH,BNB"
// Exchange rate :  "https://api.nomics.com/v1/exchange-rates?key=your-key-here"

