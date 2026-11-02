paintPage
// this function expects a color
function paintPage (color) {
    $("body").css( "background-color", color ); 
}

paintPage("yellow");

// the clicker button program

let count=0;
let colorsCount=0;

let colors=["none","green", "orange", "brown", "yellow", "gold", "purple", 
"red", "pink", "silver"];

let buttonText="";




$("#needy-button").click( function(){
      //what to do when the button is clicked
count = count + 1;
colorsCount = colorsCount +1;

console.log(count);
console.log(colors[colorsCount]);

      buttonText="I was rustled " + count + " times and now its " + colors[colorsCount];

      $("#needy-button").html(buttonText);

      paintPage(colors[colorsCount]);

      //$("body").append(" <img width='50' src='" +colors[count-1] +".jpg'>");

      if ((  count >= 5 ) && ( count < 13) ) {  $("#needy-button").after("<p>What do you think you're doing?</p>"); }

      if (  count >=13 ) { $("#needy-button").after("<p>Stop that!</p>"); }

      if (  count >=16 ) { $("#needy-button").after("<p>You've been warned...</p>"); }

      colorsCount = colorsCount +1;

      // if we run out of colors, start over from the first one.

      if( colorsCount >= 8) { colorsCount = 0;  }

 });


$("#green").click( function(){
      
      console.log("green was clicked");
      paintPage("green");


});

$("#orange").click( function(){
      
      console.log("orange was clicked");
      paintPage("orange");


});

$("#pink").click( function(){
      
      console.log("pink was clicked");
      paintPage("pink");


});

$("#cyan").click( function(){
      
      console.log("cyan was clicked");
      paintPage("cyan");


});