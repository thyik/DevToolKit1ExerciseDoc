const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}


var storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. \
                When they got to :inserty:, they stared in horror for a few moments, then :insertz:. \
                Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

var insertX = [
    "Willy the Goblin",
    "Big Daddy",
    "Father Christmas"];

var insertY = ["the soup kitchen",
    "Disneyland",
    "the White House"];

var insertZ = ["spontaneously combusted",
    "melted into a puddle on the sidewalk",
    "turned into a slug and crawled away"];

// event handler
randomize.addEventListener('click', result);

function result() {

    var newStory = storyText;

    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);

    // replace strings
    newStory = newStory.replaceAll(":insertx:", xItem);
    newStory = newStory.replaceAll(":inserty:", yItem);
    newStory = newStory.replaceAll(":insertz:", zItem);

    if (customName.value !== '') {
        let name = customName.value;
        newStory = newStory.replaceAll("Bob", name);
    }

    if (document.getElementById("uk").checked) {
        let weight = Math.round(300 / 14);   // pound to stone :  divide by 14
        let temperature = Math.round((94 - 32) * 5 / 9);  // F to C : (F - 32) * 5/9

        newStory = newStory.replaceAll("300 pounds", weight + " stones");
        newStory = newStory.replaceAll("94 fahrenheit", temperature + " celcius");
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}                
