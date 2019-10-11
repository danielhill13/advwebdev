$("#btn").click(function(){
    $.ajax({
        method:"GET",
        url: "https://baconipsum.com/api/?type=meat-and-filler"
    })
    .done(function(res){
        $("p").text(res)
    })
    .fail(function(){
        console.log("The request failed");
    })
});
