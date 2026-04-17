// SKELETON LOADING MANAGER
const removeSkeletons = () => {
    document.querySelectorAll('.skeleton').forEach(el => {
        el.classList.remove('skeleton');
    });
};

document.addEventListener("DOMContentLoaded", () => {
    // Reveal skeleton after load
    window.addEventListener('load', () => {
        setTimeout(removeSkeletons, 800);
    });


    // TYPING EFFECT
    const typingText = [
        "Web Developer",
        "AI Enthusiast",
        "UI/UX Designer",
        "Tech Innovator"
    ];

    const typingElement = document.querySelector(".typing-container");
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        if (!typingElement) return;
        const currentText = typingText[textIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(typeEffect, 2000); // Wait before deleting
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % typingText.length;
            setTimeout(typeEffect, 500); // Wait before typing next
        } else {
            setTimeout(typeEffect, isDeleting ? 100 : 200); // Speed
        }
    }

    // Start typing effect
    if (typingElement) typeEffect();

    // MOBILE MENU
    const navMenu = document.getElementById("navMenu");
    const hamburger = document.querySelector(".hamburger");

    window.toggleMenu = () => navMenu.classList.toggle("active");
    window.closeMenu = () => navMenu.classList.remove("active");

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navMenu && hamburger && !navMenu.contains(e.target) && !hamburger.contains(e.target) && navMenu.classList.contains("active")) {
            navMenu.classList.remove("active");
        }
    });

    // SCROLL REVEAL ANIMATION
    const reveal = () => {
        const reveals = document.querySelectorAll('.reveal');
        reveals.forEach(element => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', reveal);
    reveal(); // Initial check

    // THEME TOGGLE
    const themeToggle = document.getElementById("theme-toggle");
    const htmlElement = document.documentElement;
    const themeIcon = themeToggle.querySelector("i");

    const updateThemeIcon = (theme) => {
        if (theme === "dark") {
            themeIcon.classList.remove("fa-sun");
            themeIcon.classList.add("fa-moon");
        } else {
            themeIcon.classList.remove("fa-moon");
            themeIcon.classList.add("fa-sun");
        }
    };

    // Check local storage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
        htmlElement.setAttribute("data-theme", "light");
        updateThemeIcon("light");
    } else {
        htmlElement.removeAttribute("data-theme");
        updateThemeIcon("dark");
    }

    themeToggle.addEventListener("click", () => {
        const isLight = htmlElement.hasAttribute("data-theme") && htmlElement.getAttribute("data-theme") === "light";
        if (isLight) {
            htmlElement.removeAttribute("data-theme");
            localStorage.setItem("theme", "dark");
            updateThemeIcon("dark");
        } else {
            htmlElement.setAttribute("data-theme", "light");
            localStorage.setItem("theme", "light");
            updateThemeIcon("light");
        }
    });
});
