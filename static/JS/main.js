'use srict'

filePiano = [
    "pinao/do1 dièse-01",
    "pinao/do1 dièse-02",
    "pinao/do1 dièse-03",
    "pinao/do1 dièse-04",
    "pinao/do1 dièse-05",
    "pinao/do1 dièse-06",
    "pinao/do1 dièse-07",
    "pinao/do1 dièse-08",
    "pinao/do1 dièse-09",
    "pinao/do1 dièse-10",
    "pinao/do1 dièse-11",
    "pinao/do1 dièse-12",
    "pinao/do1 dièse-13",
    "pinao/do1 dièse-14",
    "pinao/do1 dièse-15",
    "pinao/do1 dièse-16",
    "pinao/do1 dièse-17",
    "pinao/do1 dièse-18",
    "pinao/do1 dièse-19",
    "pinao/do1 dièse-20",
    "pinao/do1 dièse-21",
    "pinao/do1 dièse-22",
    "pinao/do1 dièse-23"
]

class Instrument {
    constructor( listOfFiles ){
        this.files = []
        for (const element of listOfFiles ){
            this.files.push( new Audio(`static/son/${element}.wav`)) // create an object for every audio files
        }
    }
    
    pauseMusic( index ){
        this.files[ index ].pause();
    }
    
    playMusic(index) {
        this.files[index ].play();
    }
    
}

var piano = new Instrument(filePiano);
