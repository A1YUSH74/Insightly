// script.js
document.addEventListener('DOMContentLoaded', () => {
    const loginToggle = document.getElementById('login-toggle');
    const signupToggle = document.getElementById('signup-toggle');
    const toggleButtons = document.querySelector('.toggle-buttons');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;

    // Generate stars for night sky
    const nightSky = document.querySelector('.night-sky');
    for (let i = 0; i < 200; i++) {
        const star = document.createElement('span');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.width = `${Math.random() * 2 + 1}px`;
        star.style.height = star.style.width;
        nightSky.appendChild(star);
    }

    // Toggle between Login and Signup
    loginToggle.addEventListener('click', () => {
        loginToggle.classList.add('active');
        signupToggle.classList.remove('active');
        loginForm.classList.add('active');
        signupForm.classList.remove('active');
        toggleButtons.classList.remove('signup');
    });

    signupToggle.addEventListener('click', () => {
        signupToggle.classList.add('active');
        loginToggle.classList.remove('active');
        signupForm.classList.add('active');
        loginForm.classList.remove('active');
        toggleButtons.classList.add('signup');
    });

    // Password Eye Icons
    const loginEye = document.getElementById('login-eye');
    const loginPassword = document.getElementById('login-password');
    loginEye.addEventListener('click', () => {
        if (loginPassword.type === 'password') {
            loginPassword.type = 'text';
            loginEye.classList.remove('fa-eye');
            loginEye.classList.add('fa-eye-slash');
        } else {
            loginPassword.type = 'password';
            loginEye.classList.remove('fa-eye-slash');
            loginEye.classList.add('fa-eye');
        }
    });

    const signupEye = document.getElementById('signup-eye');
    const signupPassword = document.getElementById('signup-password');
    signupEye.addEventListener('click', () => {
        if (signupPassword.type === 'password') {
            signupPassword.type = 'text';
            signupEye.classList.remove('fa-eye');
            signupEye.classList.add('fa-eye-slash');
        } else {
            signupPassword.type = 'password';
            signupEye.classList.remove('fa-eye-slash');
            signupEye.classList.add('fa-eye');
        }
    });

    // Dark/Light Mode Toggle
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark');
        if (body.classList.contains('dark')) {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        } else {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
    });

    // Prevent form submissions (for demo)
    loginForm.addEventListener('submit', (e) => e.preventDefault());
    signupForm.addEventListener('submit', (e) => e.preventDefault());
});