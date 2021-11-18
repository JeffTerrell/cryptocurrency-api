export default class CryptoService {
  static getCrypto() {
    return fetch (`https://api.nomics.com/v1/currencies/ticker?key=${process.env.NOMICS_API_KEY}&ids=XRP,BTC,ETH,LTC&interval=1d,30d&per-page=100&page=1&sort=rank`)
    .then (function(response) {
      if (!response.ok) {
        throw Error (response.statusText);
      }
      return response.json();
    })
    .catch (function(error) {
      return error;
    });
  }
  
    converter(body, number) {
    const btc = parseFloat(body[0].price);
    const eth = parseFloat(body[1].price);
    const xrp = parseFloat(body[2].price);
    const ltc = parseFloat(body[3].price);
    let convertArr = [];
  
    if ( number !== 0) {
      convertArr.push(`USD to BTC : ${number/btc}<br>`);
      convertArr.push(`USD to ETH : ${number/eth}<br>`);
      convertArr.push(`USD to XRP : ${number/xrp}<br>`);
      convertArr.push(`USD to LTC : ${number/ltc}<br>`);
    } else {
      return 0;
    }
    return convertArr;
  }
}


  // return fetch {
  //   let request = new XMLHttpRequest();
  //   const url = `https://api.nomics.com/v1/currencies/ticker?key=${process.env.NOMICS_API_KEY}&ids=XRP,BTC,ETH,LTC&interval=1d,30d&per-page=100&page=1&sort=rank`;
  //   request.onload = function() {
  //     if (this.status === 200) {
  //       resolve(request.response);          
  //     } else  {
  //       reject(request.response);
  //     }
  //   }; 
  //   request.open("GET", url, true);
  //   request.send();
  // });
    




// API key : 3a16472b5bf3fbb599978d9bef047c80fe874234

// Currency ticker : curl "https://api.nomics.com/v1/currencies/ticker?key=your-key-here&ids=BTC,ETH,XRP&interval=1d,30d&convert=EUR&per-page=100&page=1"
// Market :  "https://api.nomics.com/v1/markets?key=your-key-here&exchange=binance&base=BTC,ETH,LTC,XMR&quote=BTC,ETH,BNB"
// Exchange rate :  "https://api.nomics.com/v1/exchange-rates?key=your-key-here"

