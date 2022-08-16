var gamePattern = [];
var userClickedPattern=[];
var buttonColour = ["red", "blue", "green", "yellow"];
var level=1;
var started=false;




function startOver(){
  level=1;
  started=false;
  gamePattern=[];
  $("h1").html("Press A Key to Start");
}

function checkAnswer(currentLevel){
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

    console.log("success");

    //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
    if (userClickedPattern.length === gamePattern.length){

      //5. Call nextSequence() after a 1000 millisecond delay.
      setTimeout(function () {
        nextSequence();
      }, 1000);

    }

  } else {
    $("body").addClass("game-over");
    setTimeout(function(){
    $("body").removeClass("game-over");
  },100)
    console.log("wrong");
    startOver();

  }
}

function playSound(name){

  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}


function animatePress(currentColour){

    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
    $("#"+currentColour).removeClass("pressed");
  },100)
}

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  $("h1").css("color",userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);

  //2. Call checkAnswer() after a user has clicked and chosen their answer, passing in the index of the last answer in the user's sequence.
  checkAnswer(userClickedPattern.length-1);
});
/*  function handler(){

  $("#yellow").click(function() {
    var userChosenColour="yellow";
     checkAnswer(userChosenColour);

    animatePress(userChosenColour);
    playSound("yellow");
    userClickedPattern.push(userChosenColour);
    $("h1").css("color", "yellow");
    animatePress(userChosenColour);
    console.log(userClickedPattern);
  });


  $("#green").click(function() {
    var userChosenColour="green";
     checkAnswer(userChosenColour);
    playSound("green");

    animatePress(userChosenColour);
    userClickedPattern.push(userChosenColour);
    $("h1").css("color", "green");
    console.log(userClickedPattern);
  });

  $("#blue").click(function() {
    var userChosenColour="blue";
     checkAnswer(userChosenColour);
    playSound("blue");

    animatePress(userChosenColour);
    userClickedPattern.push(userChosenColour);
    $("h1").css("color", "blue");
    console.log(userClickedPattern);
  });

  $("#red").click(function() {
    var userChosenColour="red";
     checkAnswer(userChosenColour);
    playSound("red");

    animatePress(userChosenColour);
    userClickedPattern.push(userChosenColour);
    $("h1").css("color", "red");
    console.log(userClickedPattern);
  });

}
*/


function nextSequence() {
  $("h1").html("Level "+level);
  userClickedPattern = [];

  level+=1;
  var randomNumber = Math.floor((Math.random() * 3) + 1);
  var randomChosenColour = buttonColour[randomNumber];
  gamePattern.push(randomChosenColour);

  /*var soundName="sounds/"+randomChosenColour+".mp3";
  var sound= new Audio(soundName);
  sound.play(); */

  $("#" + randomChosenColour).fadeTo(100, 0.3, function() {
    $(this).fadeTo(500, 1.0);

  });

  /*audio.play();*/

}
$("body").click(function(event){
  if(!started){
    nextSequence();
    started=true;
  }




});
$("body").keypress(function(event){
  if(!started){
    nextSequence();
    started=true;
  }




});
