let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
//add functionality to guess function here
}

function setHiddenFields () {
  answer.value = Math.floor(Math.random() * 9999);
   attempt.value = "0";
  while (answer.lenght < 4) {
  answer.value = 0 + "answer.toString()";
  }

return answer;

}


//implement new functions here
