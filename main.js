//keys ids
const keys = [
  "c-key",
  "d-key",
  "e-key",
  "f-key",
  "g-key",
  "a-key",
  "b-key",
  "high-c-key",
  "high-d-key",
  "c-sharp-key",
  "d-sharp-key",
  "f-sharp-key",
  "g-sharp-key",
  "a-sharp-key",
  "high-c-sharp-key",
];

const sounds = {
  "c-key": "./note-sounds/c-key.mp3",
  "d-key": "./note-sounds/d-key.mp3",
  "e-key": "./note-sounds/e-key.mp3",
  "f-key": "./note-sounds/f-key.mp3",
  "g-key": "./note-sounds/g-key.mp3",
  "a-key": "./note-sounds/a-key.mp3",
  "b-key": "./note-sounds/b-key.mp3",
  "high-c-key": "./note-sounds/high-c-key.mp3",
  "high-d-key": "./note-sounds/high-d-key.mp3",
  "c-sharp-key": "./note-sounds/c-sharp-key.mp3",
  "d-sharp-key": "./note-sounds/d-sharp-key.mp3",
  "f-sharp-key": "./note-sounds/f-sharp-key.mp3",
  "g-sharp-key": "./note-sounds/g-sharp-key.mp3",
  "a-sharp-key": "./note-sounds/a-sharp-key.mp3",
  "high-c-sharp-key": "./note-sounds/high-c-sharp-key.mp3",
};

const notesElement = [];

keys.forEach(function (key) {
  notesElement.push(document.getElementById(key));
});

//Functions changing the color of a keydown and boing back when released
function keyPlay(event) {
  event.target.style.backgroundColor = "gray";
  let audio = new Audio(sounds[event.target.id]);
  audio.play();
}

function keyReturn(event) {
  event.target.style.backgroundColor = "";
}

function assignEvent(note) {
  note.onmousedown = keyPlay;
  note.onmouseup = keyReturn;
}

//Assiging each html element the event handler
notesElement.forEach((note) => {
  assignEvent(note);
});

// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById("first-next-line");
let nextTwo = document.getElementById("second-next-line");
let nextThree = document.getElementById("third-next-line");
let startOver = document.getElementById("fourth-next-line");
let lastLyric = document.getElementById("column-optional"); //originally not displayed

// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden = true;

nextOne.onclick = () => {
  nextTwo.hidden = false;
  nextOne.hidden = true;

  document.querySelector("#letter-note-five").innerHTML =
    "D<span class='super'>2</span>";
  document.querySelector("#letter-note-six").innerHTML =
    "C<span class='super'>2</span>";
};

nextTwo.onclick = () => {
  nextThree.hidden = false;
  nextTwo.hidden = true;

  document.querySelector("#word-five").innerHTML = "DEAR";
  document.querySelector("#word-six").innerHTML = "FRI-";
  lastLyric.style.display = "inline-block";

  document.querySelector("#letter-note-three").innerHTML = "G";
  document.querySelector("#letter-note-four").innerHTML = "E";
  document.querySelector("#letter-note-five").innerHTML =
    "C<span class='super'>2</span>";
  document.querySelector("#letter-note-six").innerHTML = "B";
};

// Write anonymous event handler property and function for the third progress button
nextThree.onclick = () => {
  startOver.hidden = false;
  nextThree.hidden = true;

  document.querySelector("#word-one").innerHTML = "HAP-";
  document.querySelector("#word-two").innerHTML = "PY";
  document.querySelector("#word-three").innerHTML = "BIRTH";
  document.querySelector("#word-four").innerHTML = "DAY";
  document.querySelector("#word-five").innerHTML = "TO";
  document.querySelector("#word-six").innerHTML = "YOU!";

  document.querySelector("#letter-note-one").innerHTML = "F";
  document.querySelector("#letter-note-two").innerHTML = "F";
  document.querySelector("#letter-note-three").innerHTML = "E";
  document.querySelector("#letter-note-four").innerHTML = "C";
  document.querySelector("#letter-note-five").innerHTML = "D";
  document.querySelector("#letter-note-six").innerHTML = "C";

  lastLyric.style.display = "none";
};

// This is the event handler property and function for the startOver button
startOver.onclick = function () {
  nextOne.hidden = false;
  startOver.hidden = true;
  document.getElementById("word-one").innerHTML = "HAP-";
  document.getElementById("letter-note-one").innerHTML = "G";
  document.getElementById("word-two").innerHTML = "PY";
  document.getElementById("letter-note-two").innerHTML = "G";
  document.getElementById("word-three").innerHTML = "BIRTH-";
  document.getElementById("letter-note-three").innerHTML = "A";
  document.getElementById("word-four").innerHTML = "DAY";
  document.getElementById("letter-note-four").innerHTML = "G";
  document.getElementById("word-five").innerHTML = "TO";
  document.getElementById("letter-note-five").innerHTML = "C";
  document.getElementById("word-six").innerHTML = "YOU!";
  document.getElementById("letter-note-six").innerHTML = "B";
};
