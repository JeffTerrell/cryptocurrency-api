import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CryptoService from "./js/crypto.js";


function displayCrypto (response, number) {
  const cryptoConverter = new CryptoService().converter(response, number);
  let cryptoCurrency = [];
  //for (let i= 0: i < reponse.body.length; i++) { 
  for ( let i = 0 ; i < response.length ; i++) {
    cryptoCurrency.push(`<img src= ${response[i].logo_url} class='crypto-img'> <br>`);
    cryptoCurrency.push(`${response[i].symbol} - Rank :${response[i].rank} <br> Price: $${parseInt(response[i].price)} <hr class="new1"> <br>`);
    $('.showCrypto').html(cryptoCurrency);
    $('.showConverter').html(cryptoConverter);
  }
}

function displayErrors(error) {
  $('.showErrors').text(`${error}`);
}

$(document).ready(function() {
  $('#cryptoConvert').click(function() {
    const number = $("#number").val();
    $('#number').val("");
    CryptoService.getCrypto()
      .then(function(response) {
        if (response instanceof Error) {
          throw Error(`Nomic API error: ${response.message}`);
        }
        displayCrypto(response, number);
      })
      .catch(function(error) {
        displayErrors(error.message);
      });
  });
});



// $(document).ready(function() {
//   $('#cryptoConvert').click(function() {
//   const number = $("#number").val();
  
//   $('#cryptoConvert').val("");
// const body =parse(JSON.response)
//     let promise = CryptoService.getCrypto();
//   promise.then(function(response) {
//     const response = JSON.parse(response);
//     const cryptoConverter = new CryptoService.converter(response, number);

//     let cryptoCurrency = [];
//     for (let i = 0; i < response.length; i++) {
//       cryptoCurrency.push(`<img src= ${response[i].logo_url} class='crypto-img'> <br>`);
//       cryptoCurrency.push(`${response[i].symbol} - Rank :${response[i].rank} <br> Price: $${parseInt(response[i].price)} <hr class="new1"> <br>`);
//       $('.showCrypto').html(cryptoCurrency);
//       $('.showConverter').html(cryptoConverter);
//     }  
//   }, function(error) {
//       $('.showErrors').text(`There was an error processing your request: ${error}`);
//     });
//   });
// });

// response = [ {BTC : info, name(Bitcoin)}, {ETH : info }, {XRP : info}]
// to access it  => response[i].name
// output  = [BTC, ETH, XRP]



