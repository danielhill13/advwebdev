

var btn = document.querySelector("#btn");
var username = document.querySelector("#username")
var fullname = document.querySelector("#fullname")
var email = document.querySelector("#email")
var city = document.querySelector("#city")
var userImage = document.querySelector("#avatar")

btn.addEventListener("click", function(){
    var url = "https://randomuser.me/api/";
    var data = fetch(url)
    .then(handleErrors)
    .then(parseResponse)
    .then(updateProfile)
    .catch(displayErrors)
});

function handleErrors(res){
    if(!res){
        throw Error(res.status);
    }
    return res;
}
function parseResponse(res){
    return res.json();
}
function updateProfile(data){
    username.innerHTML = data.results[0].login.username;
    fullname.innerHTML = data.results[0].name.first + " " + data.results[0].name.last;
    email.innerHTML = data.results[0].email;
    city.innerHTML = data.results[0].location.city;
    userImage.src = data.results[0].picture.thumbnail;
}
function displayErrors(err){
    console.log(err);
};