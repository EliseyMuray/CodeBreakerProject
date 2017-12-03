let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
     if(answer.value == "" || attempt.value == "") {
       setHiddenFields ();
     }
//add functionality to guess function here
}

function setHiddenFields () {
  answer.value = Math.floor(Math.random() * 9999).toString();
  attempt.value = "0";
  while (answer.lenght < 4) {
  answer.value = "0" + answer.value;
  }
}

function setMessage (message) {
  document.getElementById('message').innerHTML=message;
}

function validateInput (input) {
  input.value = input.toString();
  if  (input.lenght == 4) {
    return true;
  } else {
      setMessage ("Guesses must be exactly 4 characters long.");
      return false;
  }
}

//implement new functions here
