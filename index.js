const songsList = require('./songs_db');
let list = songsList.createList;

const rndSong = list => {
    let rndIndex = Math.floor(Math.random() * list.length);
    return list[rndIndex];
};

let song = rndSong(list);
console.log(song);
console.log('Can you guess a song by reading the first two lines of its lyrics? \nHere is a challenge for you:');
console.log('Genre: ' + song.type);
console.log('"' + song.lyrics + ' "');
