console.log("It works!")

function stringConcat (){
    var rabbits = 'Rabbits';
    var rcool = 'are cool!';
    var rabbitsrcool = rabbits + " " + rcool;
    alert(rabbitsrcool);
}
stringConcat ();

$('.navTab, .navLink, button').mouseover(function() {
  $(this).css("font-family", "cursive");
});
$('.navTab, .navLink, button').mouseout(function() {
  $(this).css("font-family", "Rosario, Times, serif");
});

