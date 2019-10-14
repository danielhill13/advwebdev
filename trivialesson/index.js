var btn = document.querySelector("#getTriviaButton");
var url = "https://opentdb.com/api.php?amount=1";
var question = document.querySelector("#question");
var answer = "";
var answerSpace = document.querySelector("#answer");
var answerBtn = document.querySelector("#answerBtn");

btn.addEventListener("click", function(){
    answerSpace.innerHTML = "";
    axios.get(url)
    .then(function(res){
        console.log(res.data.results[0])
        question.innerHTML = res.data.results[0].question;
        answer = res.data.results[0].correct_answer;
    })
    .catch(function(error){
        console.log(error);
    })
    
})

answerBtn.addEventListener("click",function(){
    answerSpace.innerHTML = answer;
})



// later: add functionality for types of questions



// https://opentdb.com/api.php?amount=1
//https://github.com/axios/axios