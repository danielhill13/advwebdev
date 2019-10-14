var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
var xhrbtn = document.querySelector("#xhr");
var fetchbtn = document.querySelector("#fetch");
var jquerybtn = document.querySelector("#jquery");
var axiosbtn = document.querySelector("#axios");
var quoteSpot = document.querySelector("#quote");


xhrbtn.addEventListener("click", xhrQuote);
fetchbtn.addEventListener("click", fetchQuote);
jquerybtn.addEventListener("click", jqueryQuote);
axiosbtn.addEventListener("click", axiosQuote);

//create request in 4 ways to get ron swanson quote
function axiosQuote(){
    axios.get(url)
    .then(function(res){
        quoteSpot.innerHTML = res.data[0];
    })
    .catch(function(error){
        console.log("Axios error", error);
    })
}


function jqueryQuote(){
    $.getJSON(url)
    .done(function(res){
        quoteSpot.innerHTML = res;
    })
    .fail(function(){
        console.log("Error with jquery request");
    })
}

function fetchQuote(){
    fetch(url)
    .then(handleFetchErrors)
    .then (fetchParse)
    .then(function(res){
        quoteSpot.innerHTML = res;
    })
    .catch(displayFetchErrors)
}
function handleFetchErrors(res){
    if(!res){
        throw Error(res.status);
    }
    return res;
}
function fetchParse(res){
    return res.json();
}
function displayFetchErrors(err){
    console.log(err);
};



function xhrQuote(){
        var XHR = new XMLHttpRequest;
        XHR.onreadystatechange = function(){
            if(XHR.readyState == 4 && XHR.status == 200){
                var data = JSON.parse(XHR.responseText);
                quoteSpot.innerHTML = data;
            }
        }
        XHR.open("GET", url)
        XHR.send();
}