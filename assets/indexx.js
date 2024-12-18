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

$('.location-cards').slick({
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









