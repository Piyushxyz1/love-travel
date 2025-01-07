

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






document.querySelector('.read-more-toggle').addEventListener('click', function() {
    var extraContent = document.querySelector('.tour-table');
    var arrow = document.querySelector('.arrow');
    
    // Toggle the visibility of the extra content (table)
    if (extraContent.style.display === 'none' || extraContent.style.display === '') {
      extraContent.style.display = 'block'; // Show the table
      arrow.innerHTML = '<i class="fa-solid fa-caret-up"></i>';  // Change arrow to up
      arrow.style.transform = 'rotate(180deg)';  // Rotate the arrow to point up
    } else {
      extraContent.style.display = 'none'; // Hide the table
      arrow.innerHTML = '<i class="fa-solid fa-caret-down"></i>';  // Change arrow to down
      arrow.style.transform = 'rotate(0deg)';  // Reset rotation of the arrow
    }
  });
  






  


$('.hotel_card_container').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow:'<span class="slick-prev"><i class="fa-solid fa-arrow-left"></i></span>',
   nextArrow: '<span class="slick-next"><i class="fa-solid fa-arrow-right"></i></span>',
  
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
  
  
  
  

let faq = document.querySelectorAll(".faq_dropdown");


faq.forEach(item => {
  item.querySelector(".questions").addEventListener("click", function() {
 
    let content = item.querySelector(".text_answer");

    if (content.style.display === "block") {
      content.style.display = "none";  
    } else {
      content.style.display = "block";  
    }
    

    let arrow = item.querySelector("span");
    if (content.style.display === "block") {
      arrow.textContent = "v";  // Change to down arrow
    } else {
      arrow.textContent = ">";  // Change to right arrow
    }
  });
});

  
  
  
  
  
  