player1=localStorage.getItem("Player1");
player2=localStorage.getItem("Player2");
Player1_score=0;
Player2_score=0;
document.getElementById("player1_name").innerHTML=player1+" : ";
document.getElementById("player2_name").innerHTML=player2+" : ";
document.getElementById("player1_score").innerHTML=Player1_score;
document.getElementById("player2_score").innerHTML=Player2_score;
document.getElementById("player_question").innerHTML="Question turn- "+player1;
document.getElementById("player_answer").innerHTML="Answer turn- "+player2;

function Submit(){
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question_word = "<h4>"+number1+" X "+number2+"</h4>";
     input_box = "<br>Answer : <input type='text' id='input_check_box'>";
      check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
       row = question_word + input_box + check_button ;
        document.getElementById("output").innerHTML = row;
         document.getElementById("number1").value = "";
         document.getElementById("number2").value = "";
}