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













$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrow: true,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  arrow:false,
  dots: true,
  centerMode: true,
  focusOnSelect: true
});



// Get modal and elements
const modal = document.getElementById("modal");
const closeButton = document.getElementById("close-btn");
const readMoreButtons = document.querySelectorAll(".read-more");

// Example of item descriptions and images, you can replace this with actual dynamic content
const items = {
    "1": { 
        title: "On The Tiger's Trail", 
        description: "Jim Corbett National Park is a national park in India located in the Nainital district of Uttarakhand state. The first national park in India, it was established in 1936 during the British Raj and named Hailey National Park after William Malcolm Hailey, a governor of the United Provinces in which it was then located. In 1956, nearly a decade after India's independence, it was renamed Corbett National Park after the hunter and naturalist Jim Corbett, who had played a leading role in its establishment and had died the year before. The park was the first to come under the Project Tiger initiative.", 
        image: "assets/images/loc1.jpg" 
    },
    "2": { 
        title: "The Call Of The Wilds", 
        description: "Jim Corbett National Park is a national park in India located in the Nainital district of Uttarakhand state. The first national park in India, it was established in 1936 during the British Raj and named Hailey National Park after William Malcolm Hailey, a governor of the United Provinces in which it was then located. In 1956, nearly a decade after India's independence, it was renamed Corbett National Park after the hunter and naturalist Jim Corbett, who had played a leading role in its establishment and had died the year before. The park was the first to come under the Project Tiger initiative.", 
        image: "assets/images/loc2.jpg"
    },
    "3": { 
        title: "The Taj & Tigers of India", 
        description: "Jim Corbett National Park is a national park in India located in the Nainital district of Uttarakhand state. The first national park in India, it was established in 1936 during the British Raj and named Hailey National Park after William Malcolm Hailey, a governor of the United Provinces in which it was then located. In 1956, nearly a decade after India's independence, it was renamed Corbett National Park after the hunter and naturalist Jim Corbett, who had played a leading role in its establishment and had died the year before. The park was the first to come under the Project Tiger initiative.", 
        image: "assets/images/loc3.jpg"
    },
    "4": { 
        title: "The Call Of The Wilds", 
        description: "Jim Corbett National Park is a national park in India located in the Nainital district of Uttarakhand state. The first national park in India, it was established in 1936 during the British Raj and named Hailey National Park after William Malcolm Hailey, a governor of the United Provinces in which it was then located. In 1956, nearly a decade after India's independence, it was renamed Corbett National Park after the hunter and naturalist Jim Corbett, who had played a leading role in its establishment and had died the year before. The park was the first to come under the Project Tiger initiative.", 
        image: "assets/images/loc4.jpg"
    },
    "5": { 
        title: "The Call Of The Wilds", 
        description: "Explore the depths of Delhi and Jaipur’s wild spaces.", 
        image: "assets/images/loc5.jpg"
    },
    "6": { 
        title: "The Call Of The Wilds", 
        description: "A journey into the untamed wilds of Delhi and Jaipur.", 
        image: "assets/images/loc6.jpg"
    }
};

// Function to open modal and load description and image
readMoreButtons.forEach(button => {
    button.addEventListener("click", function() {
        const itemId = button.getAttribute("data-item");

        // Set modal content
        const modalTitle = modal.querySelector("h2");
        const modalDescription = modal.querySelector(".item-description");
        const modalImage = modal.querySelector("#modal-image");

        // Update modal with item data
        modalTitle.textContent = items[itemId].title;
        modalDescription.textContent = items[itemId].description;
        modalImage.src = items[itemId].image;  // Update image source

        // Show the modal
        modal.style.display = "flex";
        
  document.body.classList.add("modal-open"); // Disable body scroll
    });
});

// Close the modal when the user clicks on the close button (cross icon)
closeButton.addEventListener("click", function() {
    modal.style.display = "none";
    document.body.classList.remove("modal-open"); // Enable body scroll
});

// Close the modal if the user clicks outside the modal content
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
        document.body.classList.remove("modal-open"); // Enable body scroll
    }
});


