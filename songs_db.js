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
artistsList.push(addArtist('pop rock', "pop rock artist 2"));
artistsList.push(addArtist('pop rock', "pop rock artist 3"));
artistsList.push(addArtist('pop rock', "pop rock artist 4"));

artistsList.push(addArtist('pop', "Michael Jackson"));
artistsList.push(addArtist('pop', "Elton John"));
artistsList.push(addArtist('pop', "Madonna"));
artistsList.push(addArtist('pop', "pop artist 4"));

//
//And now we're forming the list of our songs:
//

let songsList = [];

//Adding Hard Rock songs:

songsList.push(addSong('Bon Jovi', "We've got to hold on to what we've got. \n It doesn't make a difference if we make it or not"));
songsList.push(addSong("Bon Jovi", "This ain't a song for the broken-hearted \nNo silent prayer for faith-departed"));
songsList.push(addSong("Bon Jovi", "song Bon Jovi 3"));
songsList.push(addSong("Bon Jovi", "song Bon Jovi 4"));

songsList.push(addSong('Led Zeppelin', "song Led Zeppelin 1"));
songsList.push(addSong('Led Zeppelin', "song Led Zeppelin 2"));
songsList.push(addSong('Led Zeppelin', "song Led Zeppelin 3"));
songsList.push(addSong('Led Zeppelin', "song Led Zeppelin 4"));

songsList.push(addSong("Guns N' Roses", "She's got a smile that it seems to me \n Reminds me of childhood memories \n Where everything was as fresh as the bright blue sky"));
songsList.push(addSong("Guns N' Roses", "song Guns N' Roses 2"));
songsList.push(addSong("Guns N' Roses", "song Guns N' Roses 3"));
songsList.push(addSong("Guns N' Roses", "song Guns N' Roses 4"));

songsList.push(addSong("Metallica", "song Metallica 1"));
songsList.push(addSong("Metallica", "song Metallica 2"));
songsList.push(addSong("Metallica", "song Metallica 3"));
songsList.push(addSong("Metallica", "song Metallica 4"));

//Adding POP Rock songs:

songsList.push(addSong('Simon & Garfunkel', "Hello darkness, my old friend \n I've come to talk with you again"));
songsList.push(addSong('Simon & Garfunkel', "song Simon & Garfunkel 2"));
songsList.push(addSong('Simon & Garfunkel', "song Simon & Garfunkel 3"));
songsList.push(addSong('Simon & Garfunkel', "song Simon & Garfunkel 4"));

songsList.push(addSong("pop rock artist 2", "song pop rock artist 2 1"));
songsList.push(addSong("pop rock artist 2", "song pop rock artist 2 2"));
songsList.push(addSong("pop rock artist 2", "song pop rock artist 2 3"));
songsList.push(addSong("pop rock artist 2", "song pop rock artist 2 4"));

songsList.push(addSong("pop rock artist 3", "song pop rock artist 3 1"));
songsList.push(addSong("pop rock artist 3", "song pop rock artist 3 2"));
songsList.push(addSong("pop rock artist 3", "song pop rock artist 3 3"));
songsList.push(addSong("pop rock artist 3", "song pop rock artist 3 4"));

songsList.push(addSong("pop rock artist 4", "song pop rock artist 4 1"));
songsList.push(addSong("pop rock artist 4", "song pop rock artist 4 2"));
songsList.push(addSong("pop rock artist 4", "song pop rock artist 4 3"));
songsList.push(addSong("pop rock artist 4", "song pop rock artist 4 4"));

//Adding POP songs:

songsList.push(addSong('Michael Jackson', "She was more like a beauty queen from a movie scene \n I said don't mind, but what do you mean, I am the one"));
songsList.push(addSong("Michael Jackson", "song Michael Jackson 2"));
songsList.push(addSong("Michael Jackson", "song Michael Jackson 3"));
songsList.push(addSong("Michael Jackson", "song Michael Jackson 4"));

songsList.push(addSong('Elton John', "She packed my bags last night pre-flight \n Zero hour 9:00 a.m. \n And I'm gonna be high \n As a kite by then"));
songsList.push(addSong("Elton John", "song Elton John 2"));
songsList.push(addSong("Elton John", "song Elton John 3"));
songsList.push(addSong("Elton John", "song Elton John 4"));

songsList.push(addSong('Madonna', "You only see what your eyes want to see \n How can life be what you want it to be? "));
songsList.push(addSong("Madonna", "song Madonna 2"));
songsList.push(addSong("Madonna", "song Madonna 3"));
songsList.push(addSong("Madonna", "song Madonna 4"));

songsList.push(addSong("pop artist 4", "song pop artist 4 1"));
songsList.push(addSong("pop artist 4", "song pop artist 4 2"));
songsList.push(addSong("pop artist 4", "song pop artist 4 3"));
songsList.push(addSong("pop artist 4", "song pop artist 4 3"));


//exporting our lists
module.exports = {genresList, artistsList, songsList};
