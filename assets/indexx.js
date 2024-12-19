document.querySelectorAll('.dropdown-btn2').forEach(button => {
  button.addEventListener('click', function() {
      const parentCard = this.closest('.day-planner');
      
      // Toggle the open class on the parent card to show the dropdown
      parentCard.classList.toggle('open');

      // Toggle the button text between "+" and "-"
      if (parentCard.classList.contains('open')) {
          this.textContent = '-';  // Change to minus when opened
      } else {
          this.textContent = '+';  // Change back to plus when closed
      }
  });
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




document.addEventListener('DOMContentLoaded', function () {
  // Get all menu items with sub-menus
  const menuItems = document.querySelectorAll('.menu-item'); 

  menuItems.forEach(function(menuItem) {
    // Get the sub-menu within each menu item
    const subMenu = menuItem.querySelector('.sub-menu'); 

    // Add event listener to each menu item
    menuItem.addEventListener('click', function (event) {
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
});
$(document).ready(function() {
  // Initialize the Slick carousel
  $('.location-cards').slick({
    dots: false,
    arrows: true, // Enable arrow navigation
    prevArrow: '<button type="button" class="slick-prev"></button>',  // Default button for "prev"
    nextArrow: '<button type="button" class="slick-next"></button>',  // Default button for "next"
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
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
    ]
  });

  // Apply CSS for Slick arrows using JavaScript
  $('.slick-prev, .slick-next').css({
    'background-color': 'rgba(0,0,0,0.5)',  // Remove background color
    'color': '',  // Set the arrow color (text color) to black (you can change this to white or any color)
    'border': 'none',  // Remove border
    'padding': '10px',  // Padding for a larger clickable area
    'font-size': '100px',  // Increase the size of the arrows (make them bigger)
    'display': 'flex',  // Use flexbox to center the content
    'justify-content': 'center',  // Center horizontally
    'align-items': 'center',  // Center vertically
    'position': 'absolute',  // Position them absolutely within the carousel
    'top': '50%',  // Center vertically in the middle of the carousel
    'transform': 'translateY(-50%)',  // Adjust for exact centering
    'z-index': '1000',  // Ensure the arrows appear on top
    'border-radius': '50%',  // Make the buttons circular (optional)
    'cursor': 'pointer',  // Change the cursor to pointer on hover
  });

  // Position the prev and next arrows correctly
  $('.slick-prev').css('left', '10px');  // Position the prev button to the left
  $('.slick-next').css('right', '10px');  // Position the next button to the right
});

// JavaScript for form validation

function validateForm() {
    let isValid = true;

    // Clear previous error messages
    document.getElementById('nameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('destinationError').innerText = '';
    document.getElementById('departureError').innerText = '';
    document.getElementById('messageError').innerText = '';

    // Validate name
    let name = document.getElementById('name').value;
    if (name === "") {
        document.getElementById('nameError').innerText = 'Name is required.';
        isValid = false;
    }

    // Validate email
    let email = document.getElementById('email').value;
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === "" || !email.match(emailPattern)) {
        document.getElementById('emailError').innerText = 'Please enter a valid email address.';
        isValid = false;
    }

    // Validate destination
    let destination = document.getElementById('destination').value;
    if (destination === "") {
        document.getElementById('destinationError').innerText = 'Destination is required.';
        isValid = false;
    }

    // Validate departure date
    let departure = document.getElementById('departure').value;
    if (departure === "") {
        document.getElementById('departureError').innerText = 'Departure date is required.';
        isValid = false;
    }

    // Validate message
    let message = document.getElementById('message').value;
    if (message === "") {
        document.getElementById('messageError').innerText = 'Message is required.';
        isValid = false;
    }

    return isValid;
}









