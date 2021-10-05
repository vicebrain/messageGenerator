//getting lists of songs, artists and genres from the 'database'
const {genresList, artistsList, songsList} = require('./songs_db');

//picking a random genre
let genre =  genresList[Math.floor(Math.random() * genresList.length)];

//selecting all artists of chosen genre from the list of artists
let artists = artistsList.filter(artist => artist.genre === genre);

//selecting a random artist of the chosen genre from the filtered list
let artist = artists[Math.floor(Math.random() * artists.length)].artist;

//selecting all songs of a chosen artist
let songs = songsList.filter(song => song.artist === artist);

//selecting a random song of a chosen artist from the filtered list
let song = songs[Math.floor(Math.random() * songs.length)];

//Logging the result to the console
console.log("Can you guess the name of a song by reading a few lines of it's lyrics? \nHere is a challenge for you:");
console.log('Genre: ' + genre);
console.log('Artist: ' + artist);
console.log('"' + song.lyrics + ' "');
