//Creating a list of genres
const genresList = ['pop rock', 'pop', 'hard rock'];

// A factory function to add 'genre : artist' pairs to our Artists list
function addArtist (genre, artist) {
    return {
        genre: genre,
        artist: artist
    }
}

// A factory function to add 'artist : song' pairs to our Songs list
function addSong (artist, lyrics) {
    return {
        artist: artist,
        lyrics: lyrics
    }
}

//
//Forming the list of our artists:
//

let artistsList = [];
artistsList.push(addArtist('hard rock', "Bon Jovi"));
artistsList.push(addArtist('hard rock', "Led Zeppelin"));
artistsList.push(addArtist('hard rock', "Guns N' Roses"));
artistsList.push(addArtist('hard rock', "Metallica"));

artistsList.push(addArtist('pop rock', "Simon & Garfunkel"));
artistsList.push(addArtist('pop rock', ""));
artistsList.push(addArtist('pop rock', ""));
artistsList.push(addArtist('pop rock', ""));

artistsList.push(addArtist('pop', ""));
artistsList.push(addArtist('pop', "Michael Jackson"));
artistsList.push(addArtist('pop', "Elton John"));
artistsList.push(addArtist('pop', "Madonna"));

//
//And now we're forming the list of our songs:
//

let songsList = [];

//Adding Hard Rock songs:

songsList.push(addSong('Bon Jovi', "We've got to hold on to what we've got. \n It doesn't make a difference if we make it or not"));
songsList.push(addSong("Bon Jovi", "This ain't a song for the broken-hearted \nNo silent prayer for faith-departed"));
songsList.push(addSong("Bon Jovi", ""));
songsList.push(addSong("Bon Jovi", ""));

songsList.push(addSong('Led Zeppelin', ""));
songsList.push(addSong('Led Zeppelin', ""));
songsList.push(addSong('Led Zeppelin', ""));
songsList.push(addSong('Led Zeppelin', ""));

songsList.push(addSong("Guns N' Roses", "She's got a smile that it seems to me \n Reminds me of childhood memories \n Where everything was as fresh as the bright blue sky"));
songsList.push(addSong("Guns N' Roses", ""));
songsList.push(addSong("Guns N' Roses", ""));
songsList.push(addSong("Guns N' Roses", ""));

songsList.push(addSong("Metallica", ""));
songsList.push(addSong("Metallica", ""));
songsList.push(addSong("Metallica", ""));
songsList.push(addSong("Metallica", ""));

//Adding POP Rock songs:

songsList.push(addSong('Simon & Garfunkel', "Hello darkness, my old friend \n I've come to talk with you again"));
songsList.push(addSong('Simon & Garfunkel', ""));
songsList.push(addSong('Simon & Garfunkel', ""));
songsList.push(addSong('Simon & Garfunkel', ""));

songsList.push(addSong("", ""));
songsList.push(addSong("", ""));
songsList.push(addSong("", ""));
songsList.push(addSong("", ""));

songsList.push(addSong("", ""));
songsList.push(addSong("", ""));
songsList.push(addSong("", ""));
songsList.push(addSong("", ""));

songsList.push(addSong("", ""));
songsList.push(addSong("", ""));
songsList.push(addSong("", ""));
songsList.push(addSong("", ""));

//Adding POP songs:

songsList.push(addSong('Michael Jackson', "She was more like a beauty queen from a movie scene \n I said don't mind, but what do you mean, I am the one"));
songsList.push(addSong("Michael Jackson", ""));
songsList.push(addSong("Michael Jackson", ""));
songsList.push(addSong("Michael Jackson", ""));

songsList.push(addSong('Elton John', "She packed my bags last night pre-flight \n Zero hour 9:00 a.m. \n And I'm gonna be high \n As a kite by then"));
songsList.push(addSong("Elton John", ""));
songsList.push(addSong("Elton John", ""));
songsList.push(addSong("Elton John", ""));

songsList.push(addSong('Madonna', "You only see what your eyes want to see \n How can life be what you want it to be? "));
songsList.push(addSong("Madonna", ""));
songsList.push(addSong("Madonna", ""));
songsList.push(addSong("Madonna", ""));

songsList.push(addSong("", ""));
songsList.push(addSong("", ""));
songsList.push(addSong("", ""));
songsList.push(addSong("", ""));



console.log(list);

//exporting our lists
module.exports = {genresList, artistsList, songsList};
