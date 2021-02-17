var question_turn = "player1";
var answer_turn = "player2";
var get_answer = "";
var update_player1_score;
var player1_score = 0;
var update_player2_score;
var player2_score = 0;

var player1_name = localStorage.getItem("player1name");
console.log(player1_name);
var player2_name = localStorage.getItem("player2name");
console.log(player2_name);

function display(){
    document.getElementById("player1score").innerHTML = player1_name + ": " + player1_score;
    document.getElementById("player2score").innerHTML = player2_name + ": " + player2_score;
}
function send(){
    var number1 = document.getElementById("number_1").value;
    var number2 = document.getElementById("number_2").value;
    var answer = parseInt(number1) * parseInt(number2);
    localStorage.setItem("answer", answer);
    answer_box = `
    <h3>What Is</h3>
    <br>
    <h5>${number1} X ${number2}?</h5>
    <h3>Answer Goes Here!</h3>
    <br>
    <input class="form-control" id="user_answer" placeHolder="Enter The Answer Here">
    <br>
    <button class="btn btn-info id="check_button" onclick="check()" style="display: block">Check Answer Here!</button>
    `;
    document.getElementById("answer_box").innerHTML = answer_box;
    // var check_button = document.getElementById("check_button");
    // check_button.style.display = "block";
}
function check(){
    get_answer = document.getElementById("user_answer").value;
    answer = localStorage.getItem("answer");
    console.log(answer);
    if (get_answer == answer){
        if(answer_turn == "player1"){
            player1_score = player1_score + 1;
            document.getElementById("player1score").innerHTML = player1_name + ": " + player1_score;
        }
        else{
            player2_score = player2_score + 1;
            document.getElementById("player2score").innerHTML = player2_name + ": " + player2_score;
        }
    if(question_turn == "player1"){
        question_turn = "player2";
        document.getElementById("question_player").innerHTML = "Question Turn" + question_turn;
    }
    else{
        question_turn = "player2";
        document.getElementById("question_player").innerHTML = "Question Turn" + question_turn;
    }

   }

else{
    if(answer_turn == "player1"){
        player1_score = player1_score - 1;
        document.getElementById("player1score").innerHTML = player1_name + ": " + player1_score;
    }
    else{
        player2_score = player2_score - 1;
        document.getElementById("player2score").innerHTML = player2_name + ": " + player2_score;
}
}
}