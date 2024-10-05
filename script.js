// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Scroll Animations
const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
    threshold: 0,
    rootMargin: '0px 0px -150px 0px',
};

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('appear');
        appearOnScroll.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Lightbox functionality for gallery images
const galleryImages = document.querySelectorAll('.gallery-event-photos img');

// Get the lightbox elements
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.querySelector('.lightbox-close');

// Add click event listeners to each gallery image
galleryImages.forEach(image => {
    image.addEventListener('click', (e) => {
        lightboxImg.src = e.target.src;
        lightbox.classList.add('active');
    });
});

// Add event listener to close the lightbox when clicking the close button
lightboxClose.addEventListener('click', () => {
    lightbox.classList.remove('active');
});

// Optional: Close the lightbox if clicking outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove('active');
    }
});

// Form Validation for Telephone Field
document.getElementById('contact-form').addEventListener('submit', function (e) {
    const telInput = document.getElementById('tel');
    const telValue = telInput.value.trim();
    
    // Check if the input is not empty and is not a valid phone number
    const telRegex = /^\d{10,15}$/; // Adjust based on your phone number requirements

    if (telValue && !telRegex.test(telValue)) {
        e.preventDefault(); // Prevent form submission
        alert('Please enter a valid telephone number.'); // Alert message
        telInput.focus(); // Set focus back to the input field
    }
});
document.getElementById('membership-form').addEventListener('submit', function (e) {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const telInput = document.getElementById('tel');
    const messageInput = document.getElementById('message');

    // Validate the name, email, and phone fields
    if (nameInput.value.trim() === "" || emailInput.value.trim() === "" || telInput.value.trim() === "" || messageInput.value.trim() === "") {
        e.preventDefault(); // Prevent form submission
        alert('All fields are required.');
        return;
    }

    // Check for valid email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        e.preventDefault();
        alert('Please enter a valid email address.');
        return;
    }

    // Check for valid phone number
    const telRegex = /^\d{10,15}$/; // Adjust for your phone number format
    if (!telRegex.test(telInput.value)) {
        e.preventDefault();
        alert('Please enter a valid phone number.');
        return;
    }
});
document.getElementById('membership-form').addEventListener('submit', function (e) {
    const phoneInput = document.getElementById('phone');
    const phoneValue = phoneInput.value.trim();
    
    // Check if the input is not empty and is not a valid phone number
    const phoneRegex = /^\d{10,15}$/; // Adjust based on your phone number requirements

    if (phoneValue && !phoneRegex.test(phoneValue)) {
        e.preventDefault(); // Prevent form submission
        alert('Please enter a valid phone number.'); // Alert message
        phoneInput.focus(); // Set focus back to the input field
    }
});

