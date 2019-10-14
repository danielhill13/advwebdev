var btn = document.querySelector("#catButton");
var catImg = document.querySelector("#catImg");

btn.addEventListener("click", function(){
    $.getJSON("http://aws.random.cat/meow")
    .done(function(res){
        catImg.src = res.file;
    })
    .fail(function(){
        console.log ("Error retrieving Image");
    })
})
