
	function Song(title, artist, src){
		this.title = title;
		this.artist = artist;
		this.src = src;

		this.info = function(){
			return this.artist + ":" + this.title
		}
	}

	var Jukebox = function(){
		var i = 0;
		var player = document.getElementById('song');

		this.songs = []
// adds songs to array, in js file only
		this.addSongs = function(song){
			console.log(song)
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
// yay plays next song in object
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
			// document.getElementById('song1').play();
		}
// yay this pauses songs
		this.pause = function(){
			player.pause();
		}
	}


	var jukebox = new Jukebox();


	var song1 = new Song('Apache Peak', 'Texas Ranger', 'https://ia801406.us.archive.org/16/items/TalesOfTheTexasRangers/Texas_Rangers_1950_07_22_03_Apache_Peak.mp3')
	var song2 = new Song('Million Words', 'Better Living Radio', 'https://ia800301.us.archive.org/6/items/Better.Living.Radio.Theatre/BLRT_53-xx-xx_01_A_Million_Words_A_Million_Songs.mp3')
	var song3 = new Song('Big Inheritance', 'AbbotCostello', 'https://ia800500.us.archive.org/1/items/AbbottCostello_733/AbbottCostello-costellosBigInheritance-1948-01-23.mp3')
	var song4 = new Song('Kings Justice', 'Adventure of Zorro', 'https://ia800304.us.archive.org/35/items/AdventuresOfZorro/Zorro-570000_4KingsJustice.mp3')
	var song5 = new Song('', '', '')
	var song6 = new Song('', '', '')

jukebox.addSongs(song1)
jukebox.addSongs(song2)
jukebox.addSongs(song3)
jukebox.addSongs(song4)
jukebox.addSongs(song5)
jukebox.addSongs(song6)

var x = document.getElementById('');
jukebox.addSongs(x)
