
// A says
let messagesA=["Hiya howare ya?","Why?","To what?", "Good idea! Which would you like?"]
let counterA=0
//B says
let messagesB=["Terrible", "The color of this page should change.", "How about YOU choose?"]
let counterB=0

// when A is clicked
// A speaks when counterA = counterB
$("#character-a").click(function () {

    if (counterB == 3) { 
        $("#answers").css("display","flex") ; 
        $("#chat").append("<p>Toe: " + messagesA[counterA] + "</p>");
        counterA = counterA + 1;
        counterB=1000;

    }
    else if (counterA == counterB) {
        $("#chat").append("<p>Toe: " + messagesA[counterA] + "</p>");

        counterA = counterA + 1;
    }

});

// when B is clicked
// B speaks when counterB < counterA
$("#character-b").click(function () {

    if (counterB < counterA) {

        $("#chat").append("<p>Beane: " + messagesB[counterB] + "</p>");
        counterB = counterB + 1;

    }



});

// make the color buttons work

$("#answer-green").click(function () {

    $("body").css( "background-color", "green" );
    $("#chat").append("<p>Toe: Not that one!</p>");

});

$("#answer-pink").click(function () {

    $("body").css( "background-color", "pink" );
    $("#chat").append("<p>Beane: Never that!</p>");

});