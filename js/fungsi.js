function getImage(img){
    var myImage = new Image(300, 300);
	myImage.src = 'gambar.jpg';
	x = document.getElementById("gambar");
	x.appendChild(myImage);	
}
