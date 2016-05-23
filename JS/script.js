
function Song(title, artist, src){
	this.title = title;
	this.artist = artist;
	this.src = src;
}

// Jukebox object for all functions interact with songs
var Jukebox = function(){
	var i = 0;
	var player = document.getElementById('song');

// empty array for playlist
	this.songs = []

// adds songs from form
	this.addSong = function(title, artist, src){
		console.log('working')
// grabbing elements from form
		var title = document.getElementById('title').value;
		var artist = document.getElementById('artist').value;
		var src = document.getElementById('src').value;
// setting elements to variable
		var banana = new Song(title, artist, src)
			console.log(banana)
			this.songs.push(banana)
			console.log(jukebox.songs)
	}

// add songs in preloaded js file
	this.addSongs = function(song){
		console.log("addingggg songs")
		// var x = new Song(title, artist, src)
		this.songs.push(song)
	}

// yay plays next song in object
	this.nextSong = function(){
		console.log('nexxxt')
		this.currentSong = this.songs[i];
		i++;
		player.setAttribute('src', this.songs[i].src);
		this.play();
	}

// yay plays previous song in object
	this.previousSong = function(){
		console.log('before')
		this.currentSong = this.songs[i];
		i--;
		player.setAttribute('src', this.songs[i].src);
		this.play();
	}

// yay this plays songs
	this.play = function(){
		console.log('playyyyy');
		player.play();
	}

// yay this pauses songs
	this.pause = function(){
		console.log("pauseee")
		player.pause();
	}

// yay stops song
	this.stop = function(){
		console.log("stopppppppp")
		player.pause();
		player.currentTime = 0.0;
	}

// function for random track
	this.random = function(){
		console.log("randooooo")
		// var i = 0;
		this.currentSong = this.songs[Math.floor(Math.random() * this.songs.length)];
		player.setAttribute('src', this.currentSong.src)
		// console.log(this.currentSong)
			this.play()
		}
// display playlist

}



// new instance of my Jukebox object
var jukebox = new Jukebox();

// hard coded songs to play upon loading
var song1 = new Song('Apache Peak', 'Texas Ranger', 'https://ia801406.us.archive.org/16/items/TalesOfTheTexasRangers/Texas_Rangers_1950_07_22_03_Apache_Peak.mp3')
var song2 = new Song('Million Words', 'Better Living Radio', 'https://ia800301.us.archive.org/6/items/Better.Living.Radio.Theatre/BLRT_53-xx-xx_01_A_Million_Words_A_Million_Songs.mp3')
var song3 = new Song('Big Inheritance', 'AbbotCostello', 'https://ia800500.us.archive.org/1/items/AbbottCostello_733/AbbottCostello-costellosBigInheritance-1948-01-23.mp3')
var song4 = new Song('Kings Justice', 'Adventure of Zorro', 'https://ia800304.us.archive.org/35/items/AdventuresOfZorro/Zorro-570000_4KingsJustice.mp3')
var song5 = new Song('The Blank Wall', 'Whistler', 'https://ia800307.us.archive.org/10/items/OTRR_Whistler_Singles/Whistler_43-06-26_ep058_The_Blank_Wall.mp3')
var song6 = new Song('Crime Classics', 'Roger Nems', 'https://ia801405.us.archive.org/6/items/OTRR_Crime_Classics_Singles/cric_54-03-03_ep35_Roger_Nems_-_How_He_Though_Dead_Won_The_Game.mp3')

// adding hard coded songs to empty array in jukebox object
jukebox.addSongs(song1)
jukebox.addSongs(song2)
jukebox.addSongs(song3)
jukebox.addSongs(song4)
jukebox.addSongs(song5)
jukebox.addSongs(song6)

// loop to add songs to html
// += allows the loop to add more than one html tag to document
for (i=0; i<jukebox.songs.length; i++){
	// console.log(jukebox.songs[i].artist)
	document.getElementById('tracks').innerHTML += "<p>" + jukebox.songs[i].artist + "</p><br>"
}
	




