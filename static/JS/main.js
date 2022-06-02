"use srict";

filePiano = [
  "note/00_do_0",
  "note/01_re_b_0",
  "note/02_re_0",
  "note/03_mi_b_0",
  "note/04_mi_0",
  "note/05_fa_0",
  "note/06_so_b_0",
  "note/07_so_0",
  "note/08_la_b_0",
  "note/09_la_0",
  "note/10_si_b_0",
  "note/11_si_0",
  "note/12_do_1",
  "note/13_re_b_1",
  "note/14_re_1",
  "note/15_mi_b_1",
  "note/16_mi_1",
  "note/17_fa_1",
  "note/18_so_b_1",
  "note/19_so_1",
  "note/20_la_b_1",
  "note/21_la_1",
  "note/22_si_b_1",
  "note/23_si_1",
  "note/24_do_2",
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
    this.files[index][1] = false;
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
notes = [3, 5, 8, 5, 12, 12, 10, 3, 5, 8, 5, 10, 10, 8];

function demoPlay(n) {
  piano.playMusic(notes[n]);
  console.log(n);
  if (n < 13) {
    setTimeout(demoPlay, 1000, n + 1);
  }
}

var piano = new Instrument(filePiano);
