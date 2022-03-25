'use srict'

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
"pinao/do1 dièse-11"
]

mappingTouchesClavier = [ // les touches du clavier par rapport aux sons
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
    ";" 
]

class Instrument {
    constructor( listOfFiles ){
        this.files = []
        for (const element of listOfFiles ){
            this.files.push( new Audio(`static/son/${element}.wav`)) // create an object for every audio files
        }
    }
    
    musicpause( index ){
        this.files[ index ].pause();
        this.files[index].currentTime = 0
    }
    
    playMusic(index) {
        this.files[index ].play();
    }
    
}


// clavier events
document.addEventListener('keydown', (event) => {
    var name = event.key;
    console.log(name)
    
    // Vérifie si la touche cliqué est utile
    if (mappingTouchesClavier.indexOf(name) !== -1){
       piano.playMusic(mappingTouchesClavier.indexOf(name))
    }
        
}, false);

document.addEventListener('keyup', (event) => {
    var name = event.key;
    console.log(name)
    
    // Vérifie si la touche cliqué est utile
    if (mappingTouchesClavier.indexOf(name) !== -1){
       piano.musicpause(mappingTouchesClavier.indexOf(name))
    }
        
}, false);

var piano = new Instrument(filePiano);
