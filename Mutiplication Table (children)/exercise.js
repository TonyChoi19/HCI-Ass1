function check() {
  var flag = true;
  for (var i = 1; i <= 10; i++) {
    var input_i;
    if (i < 10)
      input_i = "input0" + i;
    else
      input_i = "input10";

    var inputval = document.getElementById(input_i).value;

    if (Number(inputval) == (Number(document.getElementById("exercise_number").innerHTML) * i)) {
      document.getElementById(input_i).style.backgroundColor = "#B1E693";
    } else {
      document.getElementById(input_i).style.backgroundColor = "#FFADAD";
      flag = false;
    }

  }

  if(flag)
    message.innerHTML = "Congratulations! You have successfully finished this exercise.";
  else
    message.innerHTML = "Please try again!";
}
