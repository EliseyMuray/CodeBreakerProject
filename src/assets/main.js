let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
//add functionality to guess function here
}
function setHiddenFields (random) {
  random = Math.random();
  var answer = Math.floor(random*9999);
  while (answer.lenght < 4) {
  "0" + toString(answer)
  }
return answer;
}


//implement new functions here
