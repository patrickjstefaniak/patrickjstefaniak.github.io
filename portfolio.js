var currentPhoto = document.getElementById('photop');
var currentName = document.getElementById("namep");
var currentInfo = document.getElementById("infop");
var currentBody = document.getElementById("bodyp");
var currentVideo = document.getElementById("videop");
var portfolioitems = portfoliostuff.items;
var portfolioDiv = document.getElementById("portfoliod");
var photoOverlay = document.getElementById("photoOverlay");
var photoO = document.getElementById("photoO");
var projectLink = document.getElementById("projectLink");


var currentItem = 0;
var vimeoLink = "https://player.vimeo.com/video/";
var imageLink = "images/";
var iframe = document.querySelector('iframe');
var player = new Vimeo.Player(iframe);
currentPhoto.onclick = function(){openPhotoOverlay()};
photoOverlay.onclick = function(){closePhotoOverlay()};
projectLink.onclick = function(){openLink()};


setNewItem();

function setNewItem(){
	currentPhoto.style.opacity = 0;
	currentVideo.style.opacity = 0;
	currentVideo.style.pointerEvents = "none";
	currentPhoto.style.pointerEvents = "none";
	currentName.innerHTML = portfolioitems[currentItem].name;
	currentInfo.innerHTML = portfolioitems[currentItem].info;
	currentBody.innerHTML = portfolioitems[currentItem].body;
	setMedia();
}


function setMedia(){


	var item = portfolioitems[currentItem];
	switch(item.type){
		case "img":
		currentPhoto.src = imageLink + item.link;
		currentPhoto.style.pointerEvents = "all";
		setTimeout(function(){currentPhoto.style.opacity = 1;}, 500);
		break;

		case "video":
		currentVideo.src = vimeoLink + item.link;
		
		currentVideo.style.pointerEvents = "all";
		setTimeout(function(){currentVideo.style.opacity = 1;}, 500);
		player.play();
		break;
	}
}

	
function openPhotoOverlay(){
	photoO.src = currentPhoto.src;
	photoOverlay.style.opacity = 1;
	photoOverlay.style.pointerEvents = 'all';
	console.log("uh")
}

function closePhotoOverlay(){
	photoOverlay.style = {'opacity' : 0, 'pointerEvents' : 'none'};
}

function openLink(){
	var link = portfolioitems[currentItem].externalLink
	link != "" ? window.location.href = link : null;
}