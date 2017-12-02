let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
//add functionality to guess function here
}
function setHiddenFields () {
  answer.value = Math.floor(Math.random() * 9999);
  while (answer.lenght < 4) {
  answer.value = 0 + answer.value.toString();
  }
return answer.value;
}
function setMessage (message) {

}

function validateInput(input.value) {
  if input.length = 4 {
    return true
  } else {
    return false
  }
}

//implement new functions here
