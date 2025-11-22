// Smooth scrolling for nav links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Dark mode toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
});

// Form validation and submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const submitBtn = document.getElementById('submit-btn');
    const spinner = document.getElementById('spinner');

    // Clear previous errors
    document.querySelectorAll('.error').forEach(el => el.textContent = '');

    let valid = true;
    if (!name.value.trim()) {
        document.getElementById('name-error').textContent = 'Name is required.';
        valid = false;
    }
    if (!email.value.trim() || !/\S+@\S+\.\S+/.test(email.value)) {
        document.getElementById('email-error').textContent = 'Valid email is required.';
        valid = false;
    }
    if (!message.value.trim()) {
        document.getElementById('message-error').textContent = 'Message is required.';
        valid = false;
    }

    if (valid) {
        submitBtn.disabled = true;
        spinner.classList.remove('hidden');
        // Simulate async submission (replace with real API call)
        setTimeout(() => {
            console.log('Form submitted:', { name: name.value, email: email.value, message: message.value });
            alert('Message sent! (Demo; integrate with backend like EmailJS.)');
            this.reset();
            submitBtn.disabled = false;
            spinner.classList.add('hidden');
        }, 2000);
    }
});

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    hamburger.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen);
    
    // Close menu when clicking outside (optional enhancement)
    if (isOpen) {
        document.addEventListener('click', closeMenuOnOutsideClick);
    } else {
        document.removeEventListener('click', closeMenuOnOutsideClick);
    }
});

function closeMenuOnOutsideClick(e) {
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
        navMenu.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.removeEventListener('click', closeMenuOnOutsideClick);
    }
}

// Smooth scrolling (unchanged)
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
        
        // Close menu after clicking a link on mobile
        if (window.innerWidth <= 768) {
            navMenu.classList.remove('open');
            hamburger.classList.remove('open');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });
});