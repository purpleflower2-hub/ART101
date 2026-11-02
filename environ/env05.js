
// player name

let name = localStorage.getItem("playerName");

document.getElementById("welcome").textContent =
    "Welcome inside, " + name + ".";


// environment information

let environmentTitle = "Inside the Stable";

let environmentItems = [
    "hay",
    "horseshoes",
    "lantern",
    "bucket",
    "brush"
];

let stable = {
    name: "Looking around...",
    location: "Notice!!! We are deep in the woods",
    mood: "Notice!!! It feels eerie",
    horse: "Notice!! There is a horse outside",
    lightsOn: true
};


// original explore function

let clickCount = 0;

$("#show-stable").click(function() {

    clickCount = clickCount + 1;

    if (clickCount === 1) {
        $("#environment-output").append(
            "<p>Location: " + stable.location + "</p>"
        );
    }

    if (clickCount === 2) {
        $("#environment-output").append(
            "<p>Mood: " + stable.mood + "</p>"
        );
    }

    if (clickCount === 3) {
        $("#environment-output").append(
            "<p>Horse: " + stable.horse + "</p>"
        );
    }

    if (clickCount === 4) {
        $("#environment-output").append(
            "<p>Items: " + environmentItems.join(", ") + "</p>"
        );
    }

    if (clickCount === 1) {
        $("#show-stable").text("Explore Some More");
    }

});


// show dialogue

function showDialogue(message) {

    $("#environment-output")
        .text(message)
        .css({
            "color": "antiquewhite",
            "font-family": "headstone",
            "font-size": "24px",
            "text-align": "center",
            "text-shadow": "2px 2px 5px black"
        })
        .show();

}


// show buttons

function showButton(buttonId) {

    $(buttonId).show();

}


// hide introduction

function hideIntroduction() {

    $("body").find("h1, h2, h3, p").hide();

    $("#environment-output").hide();

    showButton("#explore");

}


// first choice: yes

$("#move-on").click(function() {

    showDialogue(
        "*You try to remember what happened and how you got here, but your mind is blank*"
    );

    $("#move-on").hide();
    $("#ask-question").hide();

    setTimeout(function() {

        hideIntroduction();

    }, 3000);

});


// second choice: where am i?

$("#ask-question").click(function() {

    showDialogue(
        "It doesn't matter much. The real question is, what do you remember?"
    );

    $("#move-on").hide();
    $("#ask-question").hide();

    setTimeout(function() {

        hideIntroduction();

    }, 3000);

});


// explore stable

$("#explore").click(function() {

    $("#explore").hide();

    showDialogue(
        "You notice the shutters on the window are loose. Perhaps you could open them..."
    );

    setTimeout(function() {

        showButton("#open-shutters");

    }, 2000);

});


// open shutters

$("#open-shutters").click(function() {

    $("#open-shutters").hide();
    $("#environment-output").hide();

    // change background

    $("body").css(
        "background-image",
        "url('barn int.no-window.jpg')"
    );

    // wait 3 seconds

    setTimeout(function() {

        showButton("#inspect-horseshoe");

    }, 3000);

});


// inspect horseshoe

$("#inspect-horseshoe").click(function() {

    $("#inspect-horseshoe").hide();

    // change background without horseshoe

    $("body").css(
        "background-image",
        "url('barn-no-horseshoe.png.jpg')"
    );

    // show horseshoe close up

    $("#horseshoe-closeup").show();

});


// close horseshoe

$("#horseshoe-closeup").click(function() {

    $("#horseshoe-closeup").hide();

    showDialogue(
        "You put the horseshoe down and notice something strange about the pile of hay."
    );

    // wait 2 seconds

    setTimeout(function() {

        $("#environment-output").hide();

        showButton("#move-hay");

    }, 2000);

});


// move hay

$("#move-hay").click(function() {

    $("#move-hay").hide();
    $("#environment-output").hide();

    // change background to reveal key

    $("body").css(
        "background-image",
        "url('stable-no-hay.png.jpg')"
    );

    // wait 2 seconds

    setTimeout(function() {

        showDialogue(
            "You move the hay aside and find an old iron key."
        );

        showButton("#take-key");

    }, 2000);

});


// take key

let hasKey = false;

$("#take-key").click(function() {

    hasKey = true;

    $("#take-key").hide();

    if (hasKey === true) {

        showDialogue(
            "You pick up the key. Suddenly, the lantern begins to flicker..."
        );

        // wait 3 seconds

        setTimeout(function() {

            $("#environment-output").hide();

            // turn lights off

            stable.lightsOn = false;

            $("body").css(
                "background-image",
                "url('stable-dark.png.jpg')"
            );

            // wait 2 seconds

            setTimeout(function() {

                showDialogue(
                    "The lights go out. You hear something moving behind you."
                );

            }, 2000);

        }, 3000);

    }

});
