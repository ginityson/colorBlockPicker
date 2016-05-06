$(document).ready(function() {
var color;
var colorArray = ["red", "green", "yellow", "blue"];
var randomNumber = generateRandomNumber(0, 3);
//var color;
//console.log(color);
appendBoxes();
randomColor(randomNumber);
//console.log(randomColor);
//this is the listener
$('.squares').on('click', rightOrWrong);
console.log('cluck');

function rightOrWrong() {
  if($(this).hasClass("activeBox")) {
    alert("Right");
    var newNumber = generateRandomNumber(0, 3);
    randomColor(newNumber);
  } else {
    alert('Wrong!');
  }
}

function randomColor (indexNumber) {
  color = colorArray[indexNumber];
  $('.' + color).addClass('activeBox');
  console.log(color);
  giveDirections(color);
  return color;
  //var $(el) = $
  //console.log('activeBox');
}

function giveDirections (color) {
  //$('#quiz').append('<p class="directions">Click on the ' + choice +'</p>');
$('#quiz').text('Click on the ' + color);
  //console.log(choice);
}

//$('#boxes').on('click', '.squares', //write a function to go here to using this to compare data (){
//make if that checks for correct box selection and gives message correct
  //else incorrect
  //console.log($(this.children(activeBox)));

//here I am adding to the DOM
// function createSquaresOnDOM() {
//   for(var i = 0; i < colorArray.length; i++) {
//   $('#boxes').append('<div class="squares"></div>');
//   var $el = $('#boxes').children().last();
//   $el.css('background-color', colorArray[i])
//   $el.data('color', colorArray[i]);
// }
// }
function appendBoxes () {
  var $el = $('#boxes').children().last();

  $('#boxes').append('<div class="red squares"></div>');
  $el.data('color', 'red');
  $('#boxes').append('<div class="green squares"></div>');
  $el.data('color', 'green');
  $('#boxes').append('<div class="yellow squares"></div>');
  $el.data('color', 'yellow');
  $('#boxes').append('<div class="blue squares"></div>');
  $el.data('color', 'blue');
}
});
//console.log($el.data.('color'));
//console.log(choice);

//console.log(choice);

//UTILITY FUNCTIONS
function generateRandomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);

}
