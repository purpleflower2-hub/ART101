let count = 0;

let buttonCreature = {
    name: "Phantom",
    species: "Ghost Horse",
    favoriteFood: "Moonlight Rays",
    moods: ["sleepy", "restless", "glowing", "afraid", "angry", "confused", "haunted"]
};

$("#needy-button").click(function () {

    count = count + 1;

    let arrayPosition = count - 1;

    let currentMood = buttonCreature.moods[arrayPosition];

   let message = "<p>You clicked me " + count + " times.</p>";
   message = message + "<p>You have awakened " + buttonCreature.name + ".</p>";
   message = message + "<p>He is feeling " + currentMood + ".</p>";
message = message + "<p>A majestic creature. he is a " + buttonCreature.species + "</p>";
message = message + "<p>His favorite food is " + buttonCreature.favoriteFood + ".</p>";

    $("#output").html(message);

    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);

});