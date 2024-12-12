




$('.location-cards-container').slick({
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
  
  



    // Form validation function
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        // Full Name validation
        var fullName = document.getElementById('fullName').value;
        if (fullName.trim() === '') {
            alert("Full Name is required.");
            event.preventDefault();
            return false;
        }

        // Email validation
        var email = document.getElementById('email').value;
        var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            event.preventDefault();
            return false;
        }

        // Phone Number validation
        var phone = document.getElementById('phone').value;
        var phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(phone)) {
            alert("Phone number must be 10 digits long.");
            event.preventDefault();
            return false;
        }

        // Message validation
        var message = document.getElementById('message').value;
        if (message.trim() === '') {
            alert("Message is required.");
            event.preventDefault();
            return false;
        }

        // If all validations pass, allow form submission
        return true;
    });
