// Smooth Scroll for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission for validation

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const role = document.getElementById('role').value;
    const bio = document.getElementById('bio').value;

    let errorMessage = '';

    // Simple validation checks
    if (name.length < 2) {
        errorMessage += 'Name must be at least 2 characters long.\n';
    }
    if (!validateEmail(email)) {
        errorMessage += 'Please enter a valid email address.\n';
    }
    if (bio.length < 20) {
        errorMessage += 'Bio must be at least 20 characters long.\n';
    }

    // If there's an error, display it. Otherwise, "submit" the form.
    if (errorMessage) {
        alert(errorMessage); // Could use a modal or inline message instead of alert for a better UX
    } else {
        // Simulate form submission (could add actual form submission logic here)
        alert('Thank you for joining as a ' + role + '! We will contact you soon.');
        // Reset form after submission
        this.reset();
    }
});

// Email Validation Function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Show Scroll-to-top Button on Scroll
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '⬆️';
scrollToTopBtn.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', function () {
    if (window.scrollY > 500) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Responsive Menu Toggle (for smaller screens)
const nav = document.querySelector('nav ul');
const toggleButton = document.createElement('button');
toggleButton.innerHTML = '☰';
toggleButton.classList.add('menu-toggle');
document.body.insertBefore(toggleButton, document.body.firstChild);

toggleButton.addEventListener('click', function () {
    nav.classList.toggle('visible');
});
