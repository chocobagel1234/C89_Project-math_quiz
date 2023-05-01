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


function send() {
    //Type function code here
    num_1 = document.getElementById("player1_input").value;
num_2 = document.getElementById("player2_input").value;

    actual_answer = parseInt(num_1) * parseInt(num_2);

    question_num = "<div class='container question-elements'> <h3><strong class='question'>" + num_1 + ' × ' + num_2 + "</h3> </div> ";

    input_box = "<label class='answer_label'>Answer: </label><br> <input type='number' id='answer_input' class='form-control' placeholder='Enter your answer here'> ";

    check_btn = "<br> <button onclick='check()' class='btn btn-info btn-sm'>Check</button> ";

    row = question_num + input_box + check_btn;

    document.getElementById("output").innerHTML = row;

    document.getElementById("player1_input").value = "";
    document.getElementById("player2_input").value = "";
}

function check() {
    //Type code to check answer here
}

function back() {
    window.location = "index.html";
}


