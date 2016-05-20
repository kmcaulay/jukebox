$(document).ready(function(){

	$.each(jukebox, function(index, value){
    $('.list').html( $('.list').html() + '<span>' + value +'</span>')
	});

$.each(obj, function(key, element) {
    alert('key: ' + key + '\n' + 'value: ' + element);
});
// 	$('#playSong').on('click', function(){
// 		playlist.play()
// 	})
// 	$('#stopSong').on('click', function(){
// 		Jukebox.stop()
// 	})
// 	$('#nextSong').on('click', function(){
// 		Jukebox.switchRecord(+1)
// 	})
// 	$('#previousSong').on('click', function(){
// 		Jukebox.switchRecord(-1)
// 		})

	$.each(jukebox, function(songs){
		$('.list').append(songs)
	})




})