var slideIndex = 1;
showDivs(slideIndex);

// Automatically change slide every 5 seconds (5000 milliseconds)
setInterval(function() {
    plusSlides(1); // Go to the next slide automatically
}, 4000); // 5000ms = 5 seconds

// Function to go to the next or previous slide
function plusSlides(n) {
  showDivs(slideIndex += n);
}

// Function to display the current slide
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");

  if (n > x.length) {slideIndex = 1} // Loop back to the first slide
  if (n < 1) {slideIndex = x.length}; // Loop to the last slide
  for (i = 0; i < x.length; i++) {
    x[i].classList.remove('show'); // Remove the "show" class to hide the slide
  }
  
  x[slideIndex-1].classList.add('show'); // Add "show" class to the current slide to fade it in
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
    left: -window.innerWidth, 
    behavior: 'smooth', 
  });
});

rightArrow.addEventListener('click', () => {
  galleryContainer.scrollBy({
    left: window.innerWidth,  
    behavior: 'smooth', 
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
				









const destinationcards = document.querySelector('.destination-cards div');
const leftArrow2 = document.querySelector('.left-arrow2');
const rightArrow2 = document.querySelector('.right-arrow2');

leftArrow2.addEventListener('click', () => {
  destinationcards.scrollBy({
    left: -300, 
    behavior: 'smooth',
  });
});

rightArrow2.addEventListener('click', () => {
  destinationcards.scrollBy({
    left: 300, // Scroll right by 300px
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
        dots: false
      }
    },
    {
      breakpoint: 884,
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
    left: -358, 
    behavior: 'smooth', 
  });
});

rightArrow3.addEventListener('click', () => {
  hotelsandresorts.scrollBy({
    left: 358, 
    behavior: 'smooth', 
  });
});












$('.hotels_array2').slick({
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
        dots: false
      }
    },
    {
      breakpoint: 884,
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
				




const hotelsandresorts2 = document.querySelector('.hotels_array2 div');
const leftArrow4 = document.querySelector('.left-arrow4');
const rightArrow4 = document.querySelector('.right-arrow4');


leftArrow4.addEventListener('click', () => {
  hotelsandresorts2.scrollBy({
    left: -358, 
    behavior: 'smooth',
  });
});

rightArrow4.addEventListener('click', () => {
  hotelsandresorts2.scrollBy({
    left: 358, 
    behavior: 'smooth', 
  });
});







$('.hotels_array3').slick({
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
        dots: false
      }
    },
    {
      breakpoint: 884,
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




const hotelsandresorts3 = document.querySelector('.hotels_array3 div');
const leftArrow5 = document.querySelector('.left-arrow5');
const rightArrow5 = document.querySelector('.right-arrow5');


leftArrow5.addEventListener('click', () => {
  hotelsandresorts3.scrollBy({
    left: -358, 
    behavior: 'smooth', 
  });
});

rightArrow5.addEventListener('click', () => {
  hotelsandresorts3.scrollBy({
    left: 358, 
    behavior: 'smooth', 
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




// Hamburger Menu Toggle (For Mobile Screens)
const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
 
  if (window.innerWidth <= 900) {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
  }
});



  // Get all menu items with sub-menus
  const menuItems = document.querySelectorAll('.menu-item'); 

  menuItems.forEach(function(menuItem) {
    // Get the sub-menu within each menu item
    const subMenu = menuItem.querySelector('.sub-menu'); 

    // Add event listener to each menu item
    menuItem.addEventListener('click', function(event) {
      // Prevent the default action of the link
      event.preventDefault();

      // Toggle the 'active' class on the menu item
      menuItem.classList.toggle('active');

      // If the sub-menu exists, toggle its visibility with animation using max-height
      if (subMenu) {
        // Check if the menu item has the 'active' class
        if (menuItem.classList.contains('active')) {
          // Set the submenu to its natural height (max-height for animation)
          subMenu.style.maxHeight = subMenu.scrollHeight + 'px'; // Set to actual height
        } else {
          // Collapse the submenu
          subMenu.style.maxHeight = '0'; // Animate collapse
        }
      }
    });
  });







var mybutton = document.getElementById("scrollToTopBtn");

// When the user scrolls down 100px from the top, show the button (on mobile screens only)
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        // Only add the class if screen width is less than or equal to 900px
        if (window.innerWidth <= 480) {
            mybutton.classList.add("show");
        }
    } else {
        mybutton.classList.remove("show");
    }
};

// When the user clicks on the button, scroll to the top of the document
mybutton.onclick = function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
