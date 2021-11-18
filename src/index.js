import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CryptoService from "./js/crypto.js";


$(document).ready(function() {
  
  let promise = CryptoService.getCrypto();
  promise.then(function(response) {
    const body = JSON.parse(response);

    let cryptoCurrency = [];
    for (let i = 0; i < body.length; i++) {
      cryptoCurrency.push(`<img src= ${body[i].logo_url} class='crypto-img'> <br>`);
      cryptoCurrency.push(`${body[i].symbol} - Rank :${body[i].rank} <br> Price: $${parseInt(body[i].price)} <hr class="new1"> <br>`);
      $('.showCrypto').html(cryptoCurrency);
    }  
  }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
    });
  });



// body = [ {BTC : info, name(Bitcoin)}, {ETH : info }, {XRP : info}]

// to access it  => body[i].name

// output  = [BTC, ETH, XRP]