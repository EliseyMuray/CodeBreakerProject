let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
     if(answer.value == "" || attempt.value == "") {
       setHiddenFields ();
     }
     if (!validateInput(input.value)) {
       return ;
      } else {
      attempt.value ++;
     }
       setMessage('You Lose! :(');
    if (getResults(input.value)) {
         setMessage("You Win! :)");
         return true;
       } else if (attempt.value < 10){
         setMessage("Incorrect, try again.");
       } else {
        setMessage("You Lose! :(");
        return false;
  }
//add functionality to guess function here
}

function getResults(input){
    var correct = 0;
    var html = '<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">';
    for(i = 0; i < answer.value.length; i++)
    {
        if(input.charAt(i) == answer.value.charAt(i))
        {
            html += '<span class="glyphicon glyphicon-ok"></span>';
            correct++;
        } else if (answer.value.indexOf(input.charAt(i)) > -1) {
            html += '<span class="glyphicon glyphicon-transfer"></span>';
        } else {
            html += '<span class="glyphicon glyphicon-remove"></span>';
        }
    }
    html += '</div></div>';

    document.getElementById('results').innerHTML += html;

    if(correct == input.length) {
        return true;
    } else {
        return false;
    }
}



function setHiddenFields() {
    answer.value = Math.floor(Math.random() * 10000).toString();
    while(answer.value.length < 4) {
        answer.value = "0" + answer.value;
    }
    attempt.value = 0;
}

function setMessage (message) {
  document.getElementById('message').innerHTML=message;
}

function validateInput(input) {
    if(input.length != 4) {
        setMessage('Guesses must be exactly 4 characters long.');
        return false;
    }
    return true;
}

function showAnswer (answer.value) {
    var code = document.getElementById('code');
    document.getElementById('code').innerHTML=answer.value;
    if (guess()) {
      code.className += " success";
    } else {
      code.className += " failure";
    }
}




//implement new functions here
