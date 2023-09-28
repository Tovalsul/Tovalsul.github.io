/*window.setInterval(teeKarpasia, 3000);
setTimeout(teeKarpasia, 6000);*/

/* Selvitä miten saat referoitua kuvia javascriptissä oikein.*/

function myohaistaAlert(){
	alert("Nyt on jo liian myöhäistä...");
}

function kuollutKarpanen(){
	var kuollutKarpanenKuva = document.createElement("IMG");
	kuollutKarpanenKuva.setAttribute("src", "kuvat/karpanen_liiskattu-removebg-preview.png");
}

/* Tee kärpäsgeneraattori joka puolen sekunnin välein luo uuden 
kärpäsen kunnes niitä on vaikka 100*/
function teeKarpasia(){
	
	
	for (let i = 0; i < 100; i++){
	var karpanenKuva = document.createElement("IMG");
	let morkoAlusta = document.createElement("div");
	
	// Ominaisuudet kärpäsille ja niiden alustoille.
	morkoAlusta.setAttribute("class", "morkoalusta");
	karpanenKuva.setAttribute("src", "kuvat/karpanen-removebg-preview.png");
	karpanenKuva.setAttribute("width", "20px");
	karpanenKuva.setAttribute("height", "20px");
	karpanenKuva.setAttribute("alt", "Kärpänen");
	karpanenKuva.setAttribute("class", "karpanen");
	karpanenKuva.setAttribute("onclick", "kuollutKarpanen()");
	
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