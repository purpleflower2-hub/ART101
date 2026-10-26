let name=localStorage.getItem("playerName");

document.getElementById("welcome").textContent="Welcome inside, " + name + ".";

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
    lightsOn: false
};

let clickCount = 0;
$("#show-stable").click(function () {

    clickCount = clickCount + 1;

    if (clickCount === 1) {
        $("#environment-output").append("<p>Location: " + stable.location + "</p>");
    }

    if (clickCount === 2) {
        $("#environment-output").append("<p>Mood: " + stable.mood + "</p>");
    }

    if (clickCount === 3) {
        $("#environment-output").append("<p>Horse: " + stable.horse + "</p>");
    }

    if (clickCount === 4) {
        $("#environment-output").append("<p>Items: " + environmentItems.join(", ") + "</p>");
    }

    if (clickCount === 1) {
        $("#show-stable").text("Explore Some More");
    }

});