<<<<<<< HEAD
//dynamically generated images

=======
>>>>>>> 45950dad2419a863fe6bd76278e12e2fa0fa8282
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
<<<<<<< HEAD
};

//LANGUAGE CHANGE

var polish = {
	language: "Język",
	menuHome: "Strona główna",
	menuSearch: "Szukaj",
	menuPhotos: "Fotki i filmy",
	menuForums: "Grona i fora",
	menuFriends: "Znajomi",
	menuMessages: "Wiadomości",
	menuProfile: "Profil",
	menuEvents: "Wydarzenia",
	menuAnnouncements: "Ogłoszenia",
	menuAdditions: "Grono dodatki",
	menuZone: "Strefa",
	hSearch: "Szukaj znajomych i nieznajomych",
	searchName: "Imię, nazwisko, nick, e-mail:",
	searchButton: "Szukaj",
	searchFemale: "Kobiety",
	searchMale: "Mężczyźni",
	searchAge: "Wiek...",
	searchCity: "Miasto...",
	hNewPhotos: "Najnowsze galerie",
	morePhotos: "Więcej galerii",
	hNewPeople: "Nowi ludzie w gronie",
	hLogin: "Logowanie",
	login: "Login, e-mail:",
	passwordd: "Hasło",
	forgotPass: "Zapomniałem hasła",
	autoLogin: "Automatyczne logowanie",
	hFindAndJoin: "Znajdź w znajomych i przyłącz się.",
	gronoCan: "W gronie możesz:",
	listElement1: "odszukać znajomych,",
	listElement2: "odbudować stare znajomości,",
	listElement3: "poznać ciekawych ludzi,",
	listElement4: "prowadzić zażarte dyskusje,",
	listElement5: "wgrać tony zdjęć,",
	listElement6: "zmienić język Grona",
	map: "Zaznacz się na mapie i zobacz gdzie są inni Gronowicze!",
	friendRequest: "Poproś znajomych o zaproszenie",
	learnMore: "Dowiedz się więcej o gronie",
	lostInvite: "Zgubione zaproszenie",
	hThreads: "Grona tematyczne",
	threadListEl1: "Zwierzęta Dzikie i Domowe",
	threadListEl2: "Sztuka",
	threadListEl3: "Książka i Film",
	threadListEl4: "Używki, Alkohole, Wino"
};

var english = {
	language: "Language",
	menuHome: "Home page",
	menuSearch: "Search",
	menuPhotos: "Photos and films",
	menuForums: "Gronos and forums",
	menuFriends: "Friends",
	menuMessages: "Messages",
	menuProfile: "Profile",
	menuEvents: "Events",
	menuAnnouncements: "Announcements",
	menuAdditions: "Grono additions",
	menuZone: "Zone",
	hSearch: "Look for friends and strangers",
	searchName: "Name, surname, nickname, e-mail:",
	searchButton: "Search",
	searchFemale: "Women",
	searchMale: "Men",
	searchAge: "Age...",
	searchCity: "City...",
	hNewPhotos: "Recent photos",
	morePhotos: "More photos",
	hNewPeople: "New people on Grono",
	hLogin: "Logging in",
	login: "Login, e-mail:",
	password: "Password",
	forgotPass: "Forgot password",
	autoLogin: "Automatic log-in",
	hFindAndJoin: "Find among friends and join.",
	gronoCan: "On Grono, you can:",
	listElement1: "find your friends,",
	listElement2: "rejuvenate old acquaintances,",
	listElement3: "meet interesting people,",
	listElement4: "have intense conversations,",
	listElement5: "upload tons of photos,",
	listElement6: "change Grono's language",
	map: "Check in on the map and see where other Grono users are!",
	friendRequest: "Ask friends for invitation",
	learnMore: "Learn more about Grono",
	lostInvite: "Lost invite",
	hThreads: "Theme Gronos",
	threadListEl1: "Animals Wild and Domesticated",
	threadListEl2: "Art",
	threadListEl3: "Books and Movies",
	threadListEl4: "Drugs, Liquor, Wine"
};

var spanish = {
	language: "Idioma",
	menuHome: "Inicio",
	menuSearch: "Búsqueda",
	menuPhotos: "Fotos y vídeos",
	menuForums: "Gronas y foros",
	menuFriends: "Amigos",
	menuMessages: "Mensajes",
	menuProfile: "Perfilar",
	menuEvents: "Eventos",
	menuAnnouncements: "Anuncios",
	menuAdditions: "Grono aditivos",
	menuZone: "Zona",
	hSearch: "Busca amigos y extranos",
	searchName: "Nombre, apellido, nick, e-mail:",
	searchButton: "Búsqueda",
	searchFemale: "Mujeres",
	searchMale: "Varones",
	searchAge: "Edad...",
	searchCity: "Ciudad...",
	hNewPhotos: "Ultimas fotos",
	morePhotos: "Mas fotos",
	hNewPeople: "Nuevas personas en Grono",
	hLogin: "Ingresar",
	login: "Login, e-mail:",
	password: "Contrasena",
	forgotPass: "Olvidaste tu contrasena?",
	autoLogin: "Inicio de sesion automatico",
	hFindAndJoin: "Encuentra a amigos y unirse.",
	gronoCan: "En Grono te puedes:",
	listElement1: "encontrar amigos,",
	listElement2: "reconstruir con viejos amigos,",
	listElement3: "conocer gente interesante,",
	listElement4: "conducir debates feroces,",
	listElement5: "cargar toneladas de imágenes,",
	listElement6: "cambiar el idioma de Grono",
	map: "Marcos en el mapa y ver dónde están los otros usuarios de Grono",
	friendRequest: "Pregunte a sus amigos para invitarte",
	learnMore: "Más información sobre Grono",
	lostInvite: "Invitación perdido",
	hThreads: "Gronos tematicas",
	threadListEl1: "Animales Domesticos y Salvajes",
	threadListEl2: "Arte",
	threadListEl3: "Libro y Película",
	threadListEl4: "Estimulantes, Licores, Vino"
};

var french = {
	language: "Langue",
	menuHome: "Maison",
	menuSearch: "Recherche",
	menuPhotos: "Photos et vidéos",
	menuForums: "Fils et forums",
	menuFriends: "Amis",
	menuMessages: "Messages",
	menuProfile: "Profil",
	menuEvents: "Evénements",
	menuAnnouncements: "Annonces",
	menuAdditions: "Grono accessoires",
	menuZone: "Zone",
	hSearch: "Rechercher des amis et des étrangers",
	searchName: "Prénom, nom, surnom, e-mail:",
	searchButton: "Recherche",
	searchFemale: "Femmes",
	searchMale: "hommes",
	searchAge: "Age...",
	searchCity: "Ville...",
	hNewPhotos: "Dernières photos",
	morePhotos: "Plus photos",
	hNewPeople: "Nouveaux personnes dans le Grono",
	hLogin: "Connexion",
	login: "Login, e-mail:",
	password: "Mot de passe",
	forgotPass: "vous avez oublié votre mot de passe?",
	autoLogin: "Connexion automatique",
	hFindAndJoin: "Trouver un ami et participer.",
	gronoCan: "Dans Grono, vous pouvez:",
	listElement1: "trouver des amis,",
	listElement2: "oreconstruire avec de vieux amis,",
	listElement3: "rencontrer des gens intéressants,",
	listElement4: "mener des débats féroces,",
	listElement5: "télécharger des tonnes de photos,",
	listElement6: "changer la langue de Grono",
	map: "Mark sur la carte et de voir où il ya d'autres utilisateurs",
	friendRequest: "Demandez à vos amis à inviter",
	learnMore: "En savoir plus sur le Grono",
	lostInvite: "invitation perdu",
	hThreads: "Raisins thème",
	threadListEl1: "Animaux sauvages et domestiques",
	threadListEl2: "Art",
	threadListEl3: "Livre et film",
	threadListEl4: "Drogues, alcool, vin"
};

var german = {
	language: "Hitler",
	menuHome: "Hitler hitler",
	menuSearch: "Hitler",
	menuPhotos: "Hitler und hitler",
	menuForums: "Hitler und hitler",
	menuFriends: "Hitler",
	menuMessages: "Hitler",
	menuProfile: "Hitler",
	menuEvents: "Hitler",
	menuAnnouncements: "Hitler",
	menuAdditions: "Hitler hitler",
	menuZone: "Hitler",
	hSearch: "Hitler hitler und hitler",
	searchName: "Hitler, hitler, hitler, e-hitler:",
	searchButton: "Hitler",
	searchFemale: "Hitler",
	searchMale: "Hitler",
	searchAge: "Hitler...",
	searchCity: "Hitler...",
	hNewPhotos: "Hitler hitler",
	morePhotos: "Hitler hitler",
	hNewPeople: "Hitler hitler heil hitler",
	hLogin: "Hitler",
	login: "Hitler, e-hitler:",
	password: "Hitler",
	forgotPass: "Hitler hitler",
	autoLogin: "Hitler hitler",
	hFindAndJoin: "Hitler heil hitler und hitler hitler.",
	gronoCan: "Hitler hitler hitler:",
	listElement1: "hitler hitler,",
	listElement2: "hitler hitler hitler,",
	listElement3: "hitler hitler hitler,",
	listElement4: "hitler hitler hitler,",
	listElement5: "hitler hitler hitler,",
	listElement6: "hitler hitler Hitler",
	map: "Hitler hitler hitler hitler und hitler hitler hitler hitler Hitler!",
	friendRequest: "Hitler hitler hitler hitler",
	learnMore: "Hitler hitler hitler hitler hitler",
	lostInvite: "Hitler hitler",
	hThreads: "Hitler hitler",
	threadListEl1: "Hitler Hitler und Hitler",
	threadListEl2: "Hitler",
	threadListEl3: "Hitler und Hitler",
	threadListEl4: "Hitler, Hitler, Hitler"
};

var italian = {
	language: "lingua",
	menuHome: "casa",
	menuSearch: "ricerca",
	menuPhotos: "Foto e video",
	menuForums: "Uva e forum",
	menuFriends: "amici",
	menuMessages: "Messaggi",
	menuProfile: "profilo",
	menuEvents: "eventi",
	menuAnnouncements: "Annunci",
	menuAdditions: "Grono accessori",
	menuZone: "zona",
	hSearch: "Ricerca di amici e sconosciuti",
	searchName: "Nome, cognome, nickname, e-mail:",
	searchButton: "ricerca",
	searchFemale: "donne",
	searchMale: "Men",
	searchAge: "età...",
	searchCity: "città...",
	hNewPhotos: "le più recenti gallerie",
	morePhotos: "Altre gallerie",
	hNewPeople: "Nuove persone nel gruppo",
	hLogin: "accesso",
	login: "Login, e-mail:",
	password: "password",
	forgotPass: "Hai dimenticato la tua password?",
	autoLogin: "login automatico",
	hFindAndJoin: "Trova un amico e partecipare.",
	gronoCan: "Tra la lattina:",
	listElement1: "trovare amici,",
	listElement2: "ricostruire con i vecchi amici,",
	listElement3: "incontrare persone interessanti,",
	listElement4: "condurre dibattiti feroci,",
	listElement5: "caricare tonnellate di immagini,",
	listElement6: "cambiare la lingua di uva",
	map: "Segna sulla mappa e vedere dove ci sono altri utenti!",
	friendRequest: "Chiedete ai vostri amici per invitare",
	learnMore: "Per saperne di più sul gruppo",
	lostInvite: "perso invito",
	hThreads: "uve Theme",
	threadListEl1: "Selvaggio e di animali domestici",
	threadListEl2: "arte",
	threadListEl3: "Libro e Film",
	threadListEl4: "Stimolanti, Liquori, Vino"
};

var langDivs = document.querySelectorAll("[data-language]");

var langFlags = document.getElementsByClassName("language-flag");

var searchButtonLg = document.getElementById("search-button");

var langFlagPl = document.getElementById("lang-pl");
var langFlagEn = document.getElementById("lang-en");
var langFlagEs = document.getElementById("lang-es");
var langFlagFr = document.getElementById("lang-fr");
var langFlagDe = document.getElementById("lang-de");
var langFlagIt = document.getElementById("lang-it");

langFlagPl.onclick = function() {
		for (var i = 0; i < langDivs.length; i++) {
			var langDiv = langDivs[i];
			var langData = langDivs[i].getAttribute("data-language");
			langDiv.textContent = polish[langData];
			searchButtonLg.value = polish["searchButton"];
		};
};

langFlagEn.onclick = function() {
		for (var i = 0; i < langDivs.length; i++) {
			var langDiv = langDivs[i];
			var langData = langDivs[i].getAttribute("data-language");
			langDiv.textContent = english[langData];
			searchButtonLg.value = english["searchButton"];
		};
};

langFlagEs.onclick = function() {
		for (var i = 0; i < langDivs.length; i++) {
			var langDiv = langDivs[i];
			var langData = langDivs[i].getAttribute("data-language");
			langDiv.textContent = spanish[langData];
			searchButtonLg.value = spanish["searchButton"];
		};
};

langFlagFr.onclick = function() {
		for (var i = 0; i < langDivs.length; i++) {
			var langDiv = langDivs[i];
			var langData = langDivs[i].getAttribute("data-language");
			langDiv.textContent = french[langData];
			searchButtonLg.value = french["searchButton"];
		};
};

langFlagDe.onclick = function() {
		for (var i = 0; i < langDivs.length; i++) {
			var langDiv = langDivs[i];
			var langData = langDivs[i].getAttribute("data-language");
			langDiv.textContent = german[langData];
			searchButtonLg.value = german["searchButton"];
		};
};

langFlagIt.onclick = function() {
		for (var i = 0; i < langDivs.length; i++) {
			var langDiv = langDivs[i];
			var langData = langDivs[i].getAttribute("data-language");
			langDiv.textContent = italian[langData];
			searchButtonLg.value = italian["searchButton"];
		};
};
/*
for (var j=0; j<langIds.length; j++) {
	var p = document.getElementById(langIds[j]);
	p.onclick = function() {
		if (langIds[j] = "lang-pl") {
			for (var i = 0; i < langDivs.length; i++) {
				var langDiv = langDivs[i];
				var langData = langDivs[i].getAttribute("data-language");
				langDiv.textContent = polish[langData];
			};
		}
		else if (langIds[j] = "lang-en") {
			for (var i = 0; i < langDivs.length; i++) {
			var langDiv = langDivs[i];
			var langData = langDivs[i].getAttribute("data-language");
			langDiv.textContent = english[langData];
			};
		}
		else if (langIds[j] = "lang-es") {
			for (var i = 0; i < langDivs.length; i++) {
			var langDiv = langDivs[i];
			var langData = langDivs[i].getAttribute("data-language");
			langDiv.textContent = spanish[langData];
			};
		}
		else if (langIds[j] = "lang-fr") {
			for (var i = 0; i < langDivs.length; i++) {
			var langDiv = langDivs[i];
			var langData = langDivs[i].getAttribute("data-language");
			langDiv.textContent = french[langData];
			};
		}
		else if (langIds[j] = "lang-de") {
			for (var i = 0; i < langDivs.length; i++) {
			var langDiv = langDivs[i];
			var langData = langDivs[i].getAttribute("data-language");
			langDiv.textContent = german[langData];
			};
		}
		else {
			for (var i = 0; i < langDivs.length; i++) {
			var langDiv = langDivs[i];
			var langData = langDivs[i].getAttribute("data-language");
			langDiv.textContent = italian[langData];
			};
		};
	};
};*/

/*langChoice.onclick = function(langChoiceId) {
	if (langChoiceId = "lang-pl") {
		for (i = 0; i < langDivs.length; i++) {
			var langDiv = langDivs[i];
			var langData = langDivs[i].getAttribute("data-language");
			langDiv.textContent = polish[langData];
		};
	}
	else if (langChoiceId = "lang-en") {
		for (i = 0; i < langDivs.length; i++) {
		var langDiv = langDivs[i];
		var langData = langDivs[i].getAttribute("data-language");
		langDiv.textContent = english[langData];
		};
	}
	else if (langChoiceId = "lang-es") {
		for (i = 0; i < langDivs.length; i++) {
		var langDiv = langDivs[i];
		var langData = langDivs[i].getAttribute("data-language");
		langDiv.textContent = spanish[langData];
		};
	}
	else if (langChoiceId = "lang-fr") {
		for (i = 0; i < langDivs.length; i++) {
		var langDiv = langDivs[i];
		var langData = langDivs[i].getAttribute("data-language");
		langDiv.textContent = french[langData];
		};
	}
	else if (langChoiceId = "lang-de") {
		for (i = 0; i < langDivs.length; i++) {
		var langDiv = langDivs[i];
		var langData = langDivs[i].getAttribute("data-language");
		langDiv.textContent = german[langData];
		};
	}
	else {
		for (i = 0; i < langDivs.length; i++) {
		var langDiv = langDivs[i];
		var langData = langDivs[i].getAttribute("data-language");
		langDiv.textContent = italian[langData];
		};
	};
};
*/
=======
};
>>>>>>> 45950dad2419a863fe6bd76278e12e2fa0fa8282
