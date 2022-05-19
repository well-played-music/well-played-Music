"use srict";

filePiano = [
  "pinao/do1 dièse-02",
  "pinao/do1 dièse-01",
  "pinao/do1 dièse-000",
  "pinao/do1 dièse-15",
  "pinao/do1 dièse-13",
  "pinao/do1 dièse-06",
  "pinao/do1 dièse-05",
  "pinao/do1 dièse-21",
  "pinao/do1 dièse-20",
  "pinao/do1 dièse-10",
  "pinao/do1 dièse-09",
  "pinao/do1 dièse-19",
  "pinao/do1 dièse-04",
  "pinao/do1 dièse-03",
  "pinao/do1 dièse-17",
  "pinao/do1 dièse-16",
  "pinao/do1 dièse-14",
  "pinao/do1 dièse-08",
  "pinao/do1 dièse-07",
  "pinao/do1 dièse-23",
  "pinao/do1 dièse-22",
  "pinao/do1 dièse-12",
  "pinao/do1 dièse-11",
];

mappingTouchesClavier = [
  // les touches du clavier par rapport aux sons
  "a",
  "é",
  "z",
  '"',
  "e",
  "r",
  "(",
  "t",
  "-",
  "y",
  "è",
  "u",
  "w",
  "s",
  "x",
  "d",
  "c",
  "v",
  "g",
  "b",
  "h",
  "n",
  "j",
  ",",
  ";",
];
class Instrument {
  constructor(listOfFiles) {
    this.files = [];
    for (const element of listOfFiles) {
      this.files.push([
        new Audio(`static/son/${element}.wav`),
        false, // le statut de la musique pour éviter que le son se répète
      ]); // create an object for every audio files
    }
  }

  musicpause(index) {
    this.files[index][0].pause();
    this.files[index][0].currentTime = 0;
  }

  playMusic(index) {
    if (!this.files[index][1]) {
      // si le son n'était pas déjas joué avant
      this.files[index][0].play();
      this.files[index][1] = true;
    }
  }
}

// clavier events
document.addEventListener(
  "keydown",
  (event) => {
    var name = event.key;
    console.log(name);

    // Vérifie si la touche cliquée est utile
    if (mappingTouchesClavier.indexOf(name) !== -1) {
      var elementToChange = document.getElementById(
        mappingTouchesClavier.indexOf(name)
      ); // pour changer la couleur des touches
      if (elementToChange.classList.contains("white")) {
        elementToChange.classList.add("whiteActivated");
      } else {
        elementToChange.classList.add("blackActivated");
      }

      piano.playMusic(mappingTouchesClavier.indexOf(name));
    }
  },
  false
);

document.addEventListener(
  "keyup",
  (event) => {
    var name = event.key;
    console.log(name);

    // Vérifie si la touche cliquée est utile
    if (mappingTouchesClavier.indexOf(name) !== -1) {
      var elementToChange = document.getElementById(
        mappingTouchesClavier.indexOf(name)
      ); // pour changer la couleur des touches
      if (elementToChange.classList.contains("whiteActivated")) {
        elementToChange.classList.remove("whiteActivated");
      } else {
        elementToChange.classList.remove("blackActivated");
      }

      piano.musicpause(mappingTouchesClavier.indexOf(name));
      this.files[index][1] = false;
    }
  },
  false
);

var piano = new Instrument(filePiano);
