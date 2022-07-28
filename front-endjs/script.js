/* Side Bar Mobile Menu Section */ 
const hamburger = document.querySelector('.hamburger-btn');
const closeBtn = document.querySelector('.close-btn');
const sideNav = document.getElementById('side-nav');

// add event listener
hamburger.addEventListener('click', () => {
  sideNav.style.display = `block`;
});

closeBtn.addEventListener('click', () => {
  sideNav.style.display = `none`;
});

document.querySelectorAll('.side-nav-link').forEach(item => {
  item.addEventListener('click', event => {
    sideNav.style.display = `none`;
  });
});

/* See More Section */
const seeMoreBtn = document.querySelector('.see-more-btn');
const loadItems = document.querySelector('.room-load');

/* add event listener */
seeMoreBtn.addEventListener('click', () => {
loadItems.style.display = `block`;
});

/* Hotel Image Slider Section */
const imagesList = [...document.querySelectorAll('.photo-section')];
const prevBtn = [...document.querySelectorAll('.arrow-left')];
const nextBtn = [...document.querySelectorAll('.arrow-right')];

imagesList.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nextBtn[i].addEventListener('click', () => {
    item.scrollLeft += containerWidth;
  });

  prevBtn[i].addEventListener('click', () => {
    item.scrollLeft -= containerWidth;
  });
});

/* Display Quote Slides Section */
var currentIndex = 1;
displaySlides(currentIndex);

function setSlides(num) {
  displaySlides(currentIndex += num);
}

function displaySlides(num) {
  var x;
  var slides = document.getElementsByClassName("imageSlides");
  if (num > slides.length) { currentIndex = 1 }
  if (num < 1) { currentIndex = slides.length }
  for (x = 0; x < slides.length; x++) {
    slides[x].style.display = "none";
  }
  slides[currentIndex - 1].style.display = "block";
}

/* Store Data In Local Storage Section */
function myStorage(event) {
event.preventDefault();

var form = document.getElementById('login-form').value;
var email_input = document.querySelector('login-email').value;
var password_input = document.querySelector('password-input').value;
var form_btn = document.querySelector('.login-btn').value;


localStorage.setItem('ls_email_input', email_input);
localStorage.setItem('ls_password_input', password_input);
}