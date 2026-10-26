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

      buttonText="I was squished " + count + " times and it's now " + colors[colorsCount];

      $("#needy-button").html(buttonText);

      $("body").css( "background-color", colors[colorsCount] );

      //$("body").append(" <img width='50' src='" +colors[count-1] +".jpg'>");

      if ((  count >= 5 ) && ( count < 13) ) {  $("#needy-button").after("<p>Hey. Stop that!</p>"); }

      if (  count >=13 ) { $("#needy-button").after("<p>What do you think you're doing?</p>"); }

      if (  count >=16 ) { $("#needy-button").after("<p>You're going to be in for a terrible suprise!</p>"); }

      colorsCount = colorsCount +1;

      // if we run out of colors, start over from the first one.

      if( colorsCount >= 8) { colorsCount = 0;  }

 });


