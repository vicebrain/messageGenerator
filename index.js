const {genresList, artistsList, songsList} = require('./songs_db');


let genre =  genresList[Math.floor(Math.random() * genresList.length)];
let artists = artistsList.filter(artist => artist.genre === genre);
//console.log(artists);
let artist = artists[Math.floor(Math.random() * artists.length)].artist;
//console.log(artist);
let songs = songsList.filter(song => song.artist === artist);
//console.log(songs);
let song = songs[Math.floor(Math.random() * songs.length)];


console.log('Can you guess the name of a song by reading the first two lines of its lyrics? \nHere is a challenge for you:');
console.log('Genre: ' + genre);
console.log('Artist: ' + artist);
console.log('"' + song.lyrics + ' "');
