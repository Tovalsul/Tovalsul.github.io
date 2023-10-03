
var kuolleetKarpasetCounter = 0;
var karpaset = 0;

function myohaistaAlert(){
	alert("Nyt on jo liian myöhäistä...");
}


/* Tee kärpäsgeneraattori joka puolen sekunnin välein luo uuden 
kärpäsen kunnes niitä on vaikka 100*/
function teeKarpasia(){
	
	function katoamisenViive(){
	karpanenKuva.parentElement.remove();
}
	
	setTimeout(teeKarpasia, 300);
	karpaset++;
	if (karpaset < 100){
	var karpanenKuva = document.createElement("IMG");
	let morkoAlusta = document.createElement("div");
	
	// Ominaisuudet kärpäsille ja niiden alustoille.
	morkoAlusta.setAttribute("class", "morkoalusta");
	karpanenKuva.setAttribute("src", "kuvat/karpanen-removebg-preview.png");
	karpanenKuva.setAttribute("width", "20px");
	karpanenKuva.setAttribute("height", "20px");
	karpanenKuva.setAttribute("alt", "Kärpänen");
	karpanenKuva.setAttribute("class", "karpanen");
	karpanenKuva.addEventListener("click", function kuollutKarpanen(){
		karpanenKuva.setAttribute("class", "kuollutKarpanen");
		karpanenKuva.setAttribute("src", "kuvat/karpanen_liiskattu-removebg-preview.png");
		karpanenKuva.parentElement.setAttribute("position", "absolute");
		karpanenKuva.removeAttribute("click", "function kuollutKarpanen()");
		
		setTimeout(katoamisenViive, 2000);
			
		kuolleetKarpasetCounter++;
		document.getElementById("kuolleidenMaara").innerHTML = kuolleetKarpasetCounter;
	});
	
	// Tässä tehtiin erikseen alusta johon liitettiin kärpänen jotta voidaan kiertää yhden animaation rajoitus ja saadaan liikettä vähän randomimmaksi.
	document.body.appendChild(morkoAlusta);
	morkoAlusta.appendChild(karpanenKuva);
	}
}

