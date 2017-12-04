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
//add functionality to guess function here
}

function getResults (input) {
  document.getElementById('results').innerHTML= `<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">`;
  var result = "`<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">`";
  for (i=0; input.lenght<=4; i++) {
    if (input.charAt(i) == answer.charAt(i)) {
      result = result + `<span class="glyphicon glyphicon-ok"></span>`;
    } else if (input.charAt(i) == answer.charAt(0) || input.charAt(i) == answer.charAt(1) || input.charAt(i) == answer.charAt(2) || input.charAt(i) == answer.charAt(3)) {
      result = result + `<span class="glyphicon glyphicon-transfer"></span>`;
    } else {
      result = result + `<span class="glyphicon glyphicon-remove"></span>`;
    }
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


//implement new functions here
