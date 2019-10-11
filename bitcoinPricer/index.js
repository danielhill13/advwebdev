

var btn = document.querySelector("#GetRateButton");
var requestedPrice = document.querySelector("#requestedPrice");
var rate = document.querySelector("#rate");
var usd = document.querySelector("#USDButton");
var EUR = document.querySelector("#EURButton");
var GBP = document.querySelector("#GBPButton");
var myMoney = 'USD';

getBitcoinPrice('USD');

usd.addEventListener("click", function(){
    myMoney = "USD";
});
GBP.addEventListener("click", function(){
    myMoney = "GBP";
});
EUR.addEventListener("click", function(){
    myMoney = "EUR";
});
btn.addEventListener("click", function(){
    getBitcoinPrice(myMoney);
});

function getBitcoinPrice(money) {
    var XHR = new XMLHttpRequest;
    XHR.onreadystatechange = function(){
        if(XHR.readyState == 4 && XHR.status == 200){
          var data = JSON.parse(XHR.responseText);
              requestedPrice.innerHTML = (data.bpi[money].rate + " " + data.bpi[money].code);
        }
    }
    XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json")
    XHR.send();
};