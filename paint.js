
var kuolleetKarpasetCounter = 0;
var karpaset = 0;

function myohaistaAlert(){
	alert("Nyt on jo liian myöhäistä...");
}


/* Tee kärpäsgeneraattori joka puolen sekunnin välein luo uuden 
kärpäsen kunnes niitä on vaikka 100*/
function teeKarpasia(){
	
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
	
		kuolleetKarpasetCounter++;
		document.getElementById("kuolleidenMaara").innerHTML = kuolleetKarpasetCounter;
	});
	
	// Tässä tehtiin erikseen alusta johon liitettiin kärpänen jotta voidaan kiertää yhden animaation rajoitus ja saadaan liikettä vähän randomimmaksi.
	document.body.appendChild(morkoAlusta);
	morkoAlusta.appendChild(karpanenKuva);
	}
}



let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("kuva");
  let dots = document.getElementsByClassName("pallo");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}