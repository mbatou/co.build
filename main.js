// Array of possible text values
const textOptions = ["Entrepreneur", "Developer", "Manager", "Freelancer", "Student", "Marketer", "Consultant"];
let currentIndex = 0;
const changingText = document.getElementById("changingText");

// Function to change the text dynamically with typing animation
function changeText() {
    const currentText = textOptions[currentIndex];
    currentIndex = (currentIndex + 1) % textOptions.length;

    let charIndex = 0;
    const typingInterval = setInterval(() => {
        if (charIndex <= currentText.length) {
            changingText.textContent = currentText.substring(0, charIndex);
            charIndex++;
        } else {
            clearInterval(typingInterval);
            setTimeout(eraseText, 1000); // Delay before erasing
        }
    }, 100);
}

// Function to erase the text
function eraseText() {
    let currentText = changingText.textContent;
    const erasingInterval = setInterval(() => {
        if (currentText.length > 0) {
            currentText = currentText.substring(0, currentText.length - 1);
            changingText.textContent = currentText;
        } else {
            clearInterval(erasingInterval);
            setTimeout(changeText, 500); // Delay before rewriting
        }
    }, 50);
}

// Start the animation
changeText();



// Function to add smooth scrolling behavior
function smoothScroll(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    }
}

// Attach click event listeners to navigation menu items
const menuItems = document.querySelectorAll('nav ul li a');
menuItems.forEach(item => {
    item.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default anchor link behavior
        const targetId = this.getAttribute('href').substring(1); // Get target section's ID
        smoothScroll(targetId); // Scroll to the target section smoothly
    });
});


// Get the "Back to Top" button element
const backToTopBtn = document.getElementById('backToTopBtn');

// Show the button when the user scrolls down 300 pixels
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.remove('hidden');
  } else {
    backToTopBtn.classList.add('hidden');
  }
});

// Scroll to the top of the page when the button is clicked
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});



// Function to check if an element is in the viewport
function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll events
function handleScroll() {
    const fadeInSection = document.querySelector('.fade-in-section');

    if (isElementInViewport(fadeInSection)) {
        fadeInSection.classList.add('fade-in');
    }
}

// Attach the scroll event listener
window.addEventListener('scroll', handleScroll);

// Initial check in case the element is already in the viewport when the page loads
handleScroll();


