//Creating a list of genres
const genresList = ['rock', 'pop', 'hard rock'];

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
artistsList.push(addArtist('hard rock', "Scorpions"));
artistsList.push(addArtist('hard rock', "Led Zeppelin"));
artistsList.push(addArtist('hard rock', "Guns N' Roses"));
artistsList.push(addArtist('hard rock', "Metallica"));

artistsList.push(addArtist('rock', "Beatles"));
artistsList.push(addArtist('rock', "Dire Straits"));
artistsList.push(addArtist('rock', "Bon Jovi"));
artistsList.push(addArtist('rock', "Queen"));

artistsList.push(addArtist('pop', "Michael Jackson"));
artistsList.push(addArtist('pop', "Elton John"));
artistsList.push(addArtist('pop', "Madonna"));
artistsList.push(addArtist('pop', "Sting"));

//
//And now we're forming the list of our songs:
//

let songsList = [];

//Adding Hard Rock songs:

songsList.push(addSong("Scorpions", "Follow the Moskva \nDown to Gorky Park \nListening to the wind of change"));
songsList.push(addSong("Scorpions", "It's early morning, the sun comes out \nLast night was shaking and pretty loud \nMy cat is purring, it scratches my skin \nSo what is wrong with another sin?"));
songsList.push(addSong("Scorpions", "Time \nIt needs time \nTo win back your love again \nI will be there \nI will be there"));
songsList.push(addSong("Scorpions", "Wise man said just walk this way \nTo the dawn of the light \nWind will blow into your face \nAs the years pass you by"));

songsList.push(addSong('Led Zeppelin', "You need cooling \nBaby I'm not fooling \nI'm gonna send ya \nBack to schooling"));
songsList.push(addSong('Led Zeppelin', "There's a lady who's sure all that glitters is gold \nAnd she's buying a stairway to heaven"));
songsList.push(addSong('Led Zeppelin', "Hey hey mama said the way you move \nGonna make you sweat, gonna make you groove"));
songsList.push(addSong('Led Zeppelin', "In the days of my youth \nI was told what it means to be a man \nNow I've reached that age \nI've tried to do all those things the best I can"));

songsList.push(addSong("Guns N' Roses", "She's got a smile that it seems to me \n Reminds me of childhood memories \n Where everything was as fresh as the bright blue sky"));
songsList.push(addSong("Guns N' Roses", "Mama take this badge from me \nI can't use it anymore \nIt's getting dark too dark to see"));
songsList.push(addSong("Guns N' Roses", "Talk to me softly \nThere's something in your eyes \nDon't hang your head in sorrow \nAnd please don't cry"));
songsList.push(addSong("Guns N' Roses", "When you were young and your heart \nWas an open book \nYou used to say live and let live"));

songsList.push(addSong("Metallica", "So close, no matter how far \nCouldn't be much more from the heart"));
songsList.push(addSong("Metallica", "New blood joins this Earth \nAnd quickly he's subdued \nThrough constant pained disgrace \nThe young boy learns their rules"));
songsList.push(addSong("Metallica", "Lay beside me and tell me what they've done \nAnd speak the words I wanna hear to make my demons run"));
songsList.push(addSong("Metallica", "Where do I take this pain of mine \nI run, but it stays right my side \nSo tear me open, pour me out \nThere's things inside that scream and shout"));

//Adding Rock songs:

songsList.push(addSong('Beatles', "When I find myself in times of trouble, Mother Mary comes to me \nSpeaking words of wisdom"));
songsList.push(addSong('Beatles', "All my troubles seemed so far away \nNow it looks as though they're here to stay"));
songsList.push(addSong('Beatles', "In the town where I was born \nLived a man who sailed to sea \nAnd he told us of his life \nIn the land of submarines"));
songsList.push(addSong('Beatles', "Here come old flat top \nHe come grooving up slowly \nHe got joo joo eyeball \nHe one holy roller \nHe got hair down to his knee \nGot to be a joker he just do what he please"));

songsList.push(addSong("Dire Straits", "Now look at them yo-yos, that's the way you do it \nYou play the guitar on the MTV"));
songsList.push(addSong("Dire Straits", "A lovestruck Romeo sings the streets a serenade \nLaying everybody low with a lovesong that he made"));
songsList.push(addSong("Dire Straits", "You get a shiver in the dark \nIt's a raining in the park but meantime- \nSouth of the river you stop and you hold everything \nA band is blowing Dixie, double four time \nYou feel alright when you hear the music ring"));
songsList.push(addSong("Dire Straits", "He got the action, he got the motion \nOh yeah, the boy can play \nDedication, devotion \nTurning all the night time into the day"));

songsList.push(addSong("Bon Jovi", "We've got to hold on to what we've got. \n It doesn't make a difference if we make it or not"));
songsList.push(addSong("Bon Jovi", "This ain't a song for the broken-hearted \nNo silent prayer for faith-departed"));
songsList.push(addSong("Bon Jovi", "This Romeo is bleeding \nBut you can't see his blood \nIt's nothing but some feelings \nThat this old dog kicked up"));
songsList.push(addSong("Bon Jovi", "On the street where you live girls talk about their social lives \nThey're made of lipstick, plastic and paint \nA touch of sable in their eyes"));

songsList.push(addSong("Queen", "I'm burnin' through the sky, yeah \m200 degrees \nThat's why they call me Mister Fahrenheit \nI'm travelling at the speed of light \nI wanna make a supersonic man out of you"));
songsList.push(addSong("Queen", "Buddy, you're a boy, make a big noise \nPlaying in the street, gonna be a big man someday \nYou got mud on your face, you big disgrace \nKicking your can all over the place, singin'"));
songsList.push(addSong("Queen", "I've paid my dues \nTime after time \nI've done my sentence \nBut committed no crime"));
songsList.push(addSong("Queen", "Empty spaces, what are we living for? \nAbandoned places, I guess we know the score, on and on \nDoes anybody know what we are looking for?"));

//Adding POP songs:

songsList.push(addSong('Michael Jackson', "She was more like a beauty queen from a movie scene \n I said don't mind, but what do you mean, I am the one"));
songsList.push(addSong("Michael Jackson", "It's close to midnight \nAnd something evil's lurking in the dark \nUnder the moonlight \nYou see a sight that almost stops your heart"));
songsList.push(addSong("Michael Jackson", "I gave her money \nI gave her time \nI gave her everything \nInside one heart could find"));
songsList.push(addSong("Michael Jackson", "What about sunrise? \nWhat about rain? \nWhat about all the things \nThat you said we were to gain?"));

songsList.push(addSong('Elton John', "She packed my bags last night pre-flight \n Zero hour 9:00 a.m. \n And I'm gonna be high \n As a kite by then"));
songsList.push(addSong("Elton John", "I don't have much money, but boy if I did \nI'd buy a big house where we both could live"));
songsList.push(addSong("Elton John", "You could never know what it's like \nYour blood like winter freezes just like ice"));
songsList.push(addSong("Elton John", "What have I gotta do to make you love me? \nWhat have I gotta do to make you care?"));

songsList.push(addSong('Madonna', "You only see what your eyes want to see \n How can life be what you want it to be? "));
songsList.push(addSong("Madonna", "Hey Mister DJ \nPut a record on \nI wanna dance with my baby"));
songsList.push(addSong("Madonna", "You think that I can't live \nWithout your love, you'll see \nYou think I can't go on another day"));
songsList.push(addSong("Madonna", "Haven't we met? \nYou're some kind of beautiful stranger \nYou could be good for me \nI have a taste for danger"));

songsList.push(addSong("Sting", "If blood will flow when flesh and steel are one \nDrying in the color of the evening sun"));
songsList.push(addSong("Sting", "He deals the cards as a meditation \nAnd those he plays never suspect"));
songsList.push(addSong("Sting", "I don't drink coffee, I take tea, my dear \nI like my toast done on one side"));
songsList.push(addSong("Sting", "You'll remember me when the west wind moves \nUpon the fields of barley"));


//exporting our lists
module.exports = {genresList, artistsList, songsList};
