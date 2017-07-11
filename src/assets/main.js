let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');
function setHiddenFields() {
  attempt = 0;
  answer = Math.floor(Math.random() * 10000);
  answer = answer.toString();
  while (answer.length < 4) {
    answer = "0" + answer;
  }

}
function validateInput(val) {
  if (val.length == 4) {
    return true;
  } else {
    setMessage("Guesses must be exactly 4 characters long.");
    return false;
  }
}
function setMessage(val) {
  document.getElementById('message').innerHTML = val;
}

function getResults(input) {
  var numCorrect = 0;
  var string = "<div class=\"row\"><span class=\"col-md-6\">' + input + '</span><div class=\"col-md-6\">";
  for (var i = 0; i < imput.length; i++){
    var char = input[i];
    if (char == answer[i]) {
      string += "<span class=\"glyphicon glyphicon-ok\"></span>";
      numCorrect++;
    } else if (answer.includes(char)) {
      string += "<span class=\"glyphicon glyphicon-transfer\"></span>";
    } else {
      string += "<span class=\"glyphicon glyphicon-remove\"></span>";
    }
  }
  string += "</div></div>";
  document.getElementById('results').innerHTML = string;
  if (numCorrect == 4) {
    showAnswer(true);
    return true;
  } else {
    showAnswer(false);
    showReplay();
    return false;
  }
}
function guess() {
    if (answer == ''){
      setHiddenFields();
    }
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if (!validInput(input.value)) {
      return false;
    } else {
      attempt++;
    }
    var result = getResults(input);
    if (result) {
      setMessage("You Win! :)");
    } else if (!result && attempt ==10) {
      setMessage("You Lose! :(")
    } else {
      setMessage("Incorrect, try again.")
    }
}

function showAnswer(bool) {
  document.getElementById('code').innerHTML = answer.value;
  if (bool) {
    document.getElementById('code').className += " success";
  } else {
    document.getElementById('code').className += " failure";
  }
}

function showReplay() {
  document.getElementById('guessing-div').style.display = none;
  document.getElementById('replay-div').style.display = block;
}
//implement new functions here
