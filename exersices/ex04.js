// the clicker button program

let count=0;

$("#needy-button").click( function(){
      //what to do when the button is clicked
      count = count + 3;
      $("#needy-button").html("I was squished " + count + " times")
 });