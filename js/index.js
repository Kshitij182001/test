var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};

var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var y = document.getElementsByClassName("dot");
  // console.log(y)
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    y[i].style.backgroundColor = "#FFF";
  }
  slideIndex++;
  if (slideIndex > x.length) {
    slideIndex = 1;
  }
  x[slideIndex - 1].style.display = "block";
  y[slideIndex - 1].style.backgroundColor = "#4e54c8";
  setTimeout(carousel, 2500);
}

var slideIndexAboutUs = 0;
carouselAboutUs();

function carouselAboutUs() {
  var i;
  var x = document.getElementsByClassName("about-us-slides");
  var y = document.getElementsByClassName("dot-au");
  // console.log(y)
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    y[i].style.backgroundColor = "#FFF";
  }
  slideIndexAboutUs++;
  if (slideIndexAboutUs > x.length) {
    slideIndexAboutUs = 1;
  }
  x[slideIndexAboutUs - 1].style.display = "block";
  y[slideIndexAboutUs - 1].style.backgroundColor = "#4e54c8";
  setTimeout(carouselAboutUs, 4000);
}

var slideindexLogo = 0;
carousellogo();

function carousellogo() {
  var i;
  var x = document.getElementsByClassName("suc-img");
  console.log(x.length);
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  slideindexLogo++;
  if (slideindexLogo > x.length) {
    slideindexLogo = 1;
  }
  x[slideindexLogo - 1].style.display = "block";
  setTimeout(carousellogo, 4000);
}

//show on selecting Shah & Anchor
// function showField(){
//   var onSelect = document.getElementById("coll-name").value
//   console.log(onSelect)
// }

var navContent = document.getElementsByClassName("nav-content");
if (navContent.length > 6) {
  if (navContent.length > 8) {
    for (var i = 0; i < navContent.length; i++) {
      navContent[i].style.fontSize = "1.1vw";
      navContent[i].style.margin = "1% 1% 1% 1%";
    }
  } else {
    for (var i = 0; i < navContent.length; i++) {
      navContent[i].style.fontSize = "1.2vw";
      navContent[i].style.margin = "2% 2% 2% 2%";
    }
  }
  document.getElementsByClassName("nav")[0].style.width = "100%";
}
