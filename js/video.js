// Initialized vars

var video;
var current = 1;
var curTime = 10;

// Page Load


window.addEventListener("load", function() {
	video = document.querySelector('#player1');
	console.log("Good job opening the window");
	console.log("Autoplay is set to false");
	console.log("Loop is set to false");
	video.autoplay = false;
	video.loop = false;
});

// Play Button

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume*100 + "%";
});

// Puase Button

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

// Slow Down

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video");
	video.playbackRate = video.playbackRate*0.9;
	console.log("Speed is " + video.playbackRate);
});

// Speed Up

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up video");
	video.playbackRate = video.playbackRate/0.9;
	console.log("Speed is " + video.playbackRate);
});

// Skip Ahead

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead");
	if((curTime + video.currentTime) < video.duration)
	{
		video.currentTime += curTime;
	}
	else
	{
		video.currentTime = 0;
	}
	console.log("Video current time is " + video.currentTime);
});

// Mute

document.querySelector("#mute").addEventListener("click", function() {
	var elem = document.querySelector("#mute");
	if(video.muted == false)
	{
		video.muted = true;
		console.log("Mute")
		elem.innerHTML = "Unmute";
	}
	else
	{
		video.muted = false;
		console.log("Unmute");
		elem.innerHTML = "Mute";
	}
});

// Volume Slider

document.querySelector("#slider").addEventListener("change", function(e) {
	video.volume = e.currentTarget.value / 100;
	console.log("The current value is " + video.volume);
	document.querySelector("#volume").innerHTML = video.volume*100 + "%";
});

// Styled

document.querySelector("#vintage").addEventListener("click", function() {
	const list = video.classList;
	list.add("oldSchool");
});

// Original

document.querySelector("#orig").addEventListener("click", function() {
	const list = video.classList;
	list.remove("oldSchool");
});

