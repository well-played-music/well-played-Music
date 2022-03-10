'use srict'
function playMusic(sound) {
  var music = new Audio(`static/${sound}.wav`);
  music.play();
}
