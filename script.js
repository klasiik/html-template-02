var newPhotos = document.getElementById("new-photos-2");

for (i=0; i<25; i++) {
	var userImgDiv = document.createElement("div");
	newPhotos.appendChild(userImgDiv);
	userImgDiv.className = "user-img-div";

	var userImg = document.createElement("img");
	userImgDiv.appendChild(userImg);
	userImg.src = "http://lorempixel.com/77/77/?" + i;
	userImg.alt = "user";
	userImg.className = "user-img";
};

var newUsers = [
  'ADA',
  'ADALBERT',
  'ADAM',
  'ADELA' ,
  'ADRIAN',
  'ADRIANA',
  'ADRIANNA',
  'AGATA',
];

var newPeople = document.getElementById("new-people");

for (i=0; i<8; i++) {
	var userDiv = document.createElement("div");
	newPeople.appendChild(userDiv);
	userDiv.className = "user-div";

	var userImgDiv = document.createElement("div");
	userDiv.appendChild(userImgDiv);
	userImgDiv.className = "user-img-div user-img-div-new";

	var userImg = document.createElement("img");
	userImgDiv.appendChild(userImg);
	userImg.src = "http://lorempixel.com/77/77/?" + i;
	userImg.alt = "user";
	userImg.className = "user-img";

	var userImgP = document.createElement("p");
	userDiv.appendChild(userImgP);
	userImgP.innerHTML = newUsers[i];
};