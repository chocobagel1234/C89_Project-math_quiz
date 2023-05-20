//setting up
player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ": ";
document.getElementById("player2_name").innerHTML = player2_name + ": ";

document.getElementById("question_turn_user").innerHTML = player1_name;
document.getElementById("answer_turn_user").innerHTML = player2_name;

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

num_1 = document.getElementById("player1_input").value;
num_2 = document.getElementById("player2_input").value;

question_turn = "player1";
answer_turn = "player2";

function send() {
    //Type function code here
    num_1 = document.getElementById("player1_input").value;
    num_2 = document.getElementById("player2_input").value;

    actual_answer = parseInt(num_1) * parseInt(num_2);

    question_num = "<h3><strong class='question'>" + num_1 + ' × ' + num_2 + "</strong></h3> ";

    input_box = "Answer: <input type='number' id='answer_input'  placeholder='Enter your answer here' class='form-control'></input> ";

    check_btn = "<br> <button onclick='check()' class='btn btn-info btn-sm'>Check</button> ";

    row = question_num + input_box + check_btn;

    document.getElementById("output").innerHTML = row;

    document.getElementById("player1_input").value = "";
    document.getElementById("player2_input").value = "";
}

function check() {
    //Type code to check answer here
    get_answer = document.getElementById("input_checkbox").value;
    
    actual_answer = actual_answer;
    console.log("The actual answer is " + actual_answer);

    if(get_answer == actual_answer){
        
        if(answer_turn == "player1") {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    
    if(question_turn == "player1") {
        question_turn = "player2";
        document.getElementById("question_turn_user").innerHTML = player2_name;
    }
    else {
        question_turn = "player1";
        document.getElementById("question_turn_user").innerHTML = player1_name;
    }

    if(answer_turn == "player1") {
        answer_turn = "player2";
        document.getElementById("answer_turn_user").innerHTML = player2_name;
    }
    else{
        answer_turn = "player1";
        document.getElementById("answer_turn_user").innerHTML = player1_name; 
    }
    document.getElementById("output").innerHTML = "";
}

function back() {
    window.location = "index.html";
}


