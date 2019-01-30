

function changeVideo(fileName){
	let player = document.querySelector("#container-video")
	let host = "http://localhost:8001/"
	let urlVideo = host + fileName
	player.innerHTML = 
	'<video  class= "col-md-12 " controls="controls" autoplay="autoplay">'+
		'<source src="'+urlVideo+'" id="player-videos" type="video/mp4">'+
	'</video>'
}
