

var slideIndex = 1;
showDivs(slideIndex);

function plusSlides(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");

  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  
  x[slideIndex-1].style.display = "block";
}












document.getElementById("read-more-btn").addEventListener("click", function() {
  const moreText = document.getElementById("more-text");
  const btn = this;

  if (moreText.style.display === "none") {
    moreText.style.display = "block";
    btn.textContent = "Read Less";
  } else {
    moreText.style.display = "none";  
    btn.textContent = "Read More";
  }
});







const gallery = document.querySelector('.gallery-container');

let isMouseDown = false;
let startX;
let scrollLeft;


gallery.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    startX = e.pageX - gallery.offsetLeft;
    scrollLeft = gallery.scrollLeft;      
    gallery.style.cursor = 'pointer';      
});


gallery.addEventListener('mouseup', () => {
    isMouseDown = false;
    gallery.style.cursor = 'pointer';         
});


gallery.addEventListener('mouseleave', () => {
    isMouseDown = false;
    gallery.style.cursor = 'pointer';         
});


gallery.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return;  
    e.preventDefault();        
    
    const x = e.pageX - gallery.offsetLeft; 
    const walk = (x - startX) * 2;            
    gallery.scrollLeft = scrollLeft - walk;   
});












const galleryContainer = document.querySelector('.gallery-container');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');


leftArrow.addEventListener('click', () => {
  galleryContainer.scrollBy({
    left: -400, 
    behavior: 'smooth', 
  });
});


rightArrow.addEventListener('click', () => {
  galleryContainer.scrollBy({
    left:400,
    behavior:'smooth', 
  });
});


   








$('.destination-cards').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
				








// Select the gallery container and arrows
const destinationcards = document.querySelector('.destination-cards div');
const leftArrow2 = document.querySelector('.left-arrow2');
const rightArrow2 = document.querySelector('.right-arrow2');

// Slide the container to the left
leftArrow2.addEventListener('click', () => {
  destinationcards.scrollBy({
    left: -400, // Scroll left by 300px
    behavior: 'smooth', // Smooth scrolling
  });
});

// Slide the container to the right
rightArrow2.addEventListener('click', () => {
  destinationcards.scrollBy({
    left: 400, // Scroll right by 300px
    behavior: 'smooth', // Smooth scrolling
  });
});











$('.hotels_array').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
				




const hotelsandresorts = document.querySelector('.hotels_array div');
const leftArrow3 = document.querySelector('.left-arrow3');
const rightArrow3 = document.querySelector('.right-arrow3');


leftArrow3.addEventListener('click', () => {
  hotelsandresorts.scrollBy({
    left: -350, // Scroll left by 300px
    behavior: 'smooth', // Smooth scrolling
  });
});

rightArrow3.addEventListener('click', () => {
  hotelsandresorts.scrollBy({
    left: 350, // Scroll right by 300px
    behavior: 'smooth', // Smooth scrolling
  });
});















document.getElementById("read-more-btn2").addEventListener("click", function() {
  const moreText = document.getElementById("extra-text");
  const btn = this;

  if (moreText.style.display === "none") {
    moreText.style.display = "block";
    btn.textContent = "Read Less";
  } else {
    moreText.style.display = "none";
    btn.textContent = "Read More";
  }
});











document.getElementById("read-more-btn3").addEventListener("click", function() {
  const moreText = document.getElementById("extra-text2");
  const btn = this;

  if (moreText.style.display === "none") {
    moreText.style.display = "block";
    btn.textContent = "Read Less";
  } else {
    moreText.style.display = "none";
    btn.textContent = "Read More";
  }
});







function toggleMenu() {
  const socials = document.querySelector('.navbar-hamburger');
  socials.classList.toggle('open');  // Toggles the 'open' class to show/hide the icons
}
