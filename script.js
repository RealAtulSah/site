/*
   ==========================================================================
   Atul Sah - Professional Portfolio Javascript File
   Contains shared UI behaviors, animations, and form logic
   ==========================================================================
*/

document.addEventListener('DOMContentLoaded', () => {
    // --- Initialize Custom Cursor ---
    initCustomCursor();
    
    // --- Initialize Particle Background Canvas ---
    initParticles();
    
    // --- Initialize Mobile Nav Menu ---
    initMobileNav();
    
    // --- Initialize Scroll Reveal Animations ---
    initScrollReveal();
    
    // --- Initialize Web3Forms Submission Handler (If Form Exists) ---
    initContactForm();

    // --- Page Specific Logic (Typing effect on home) ---
    initTypingEffect();
});

/* ==========================================================================
   Custom Cursor System
   ========================================================================== */
function initCustomCursor() {
    // Create cursor elements dynamically if not already in DOM
    let cursorDot = document.querySelector('.custom-cursor');
    let cursorRing = document.querySelector('.custom-cursor-ring');
    
    if (!cursorDot) {
        cursorDot = document.createElement('div');
        cursorDot.className = 'custom-cursor';
        document.body.appendChild(cursorDot);
    }
    
    if (!cursorRing) {
        cursorRing = document.createElement('div');
        cursorRing.className = 'custom-cursor-ring';
        document.body.appendChild(cursorRing);
    }
    
    let ringX = 0, ringY = 0;
    let targetX = 0, targetY = 0;
    
    document.addEventListener('mousemove', (e) => {
        targetX = e.clientX;
        targetY = e.clientY;
        cursorDot.style.left = `${targetX}px`;
        cursorDot.style.top = `${targetY}px`;
    });
    
    // Smooth trailing effect for cursor ring
    function renderRing() {
        const speed = 0.15; // interpolation speed
        ringX += (targetX - ringX) * speed;
        ringY += (targetY - ringY) * speed;
        
        cursorRing.style.left = `${ringX}px`;
        cursorRing.style.top = `${ringY}px`;
        
        requestAnimationFrame(renderRing);
    }
    renderRing();
    
    // Add hover indicators to links, buttons and cards
    const hoverElements = document.querySelectorAll('a, button, .cyber-card, .filter-btn, .project-card, .book-card, .social-icon-btn, input, textarea');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            document.body.classList.add('cursor-hover');
        });
        el.addEventListener('mouseleave', () => {
            document.body.classList.remove('cursor-hover');
        });
    });
}

/* ==========================================================================
   Background Yellow Particles Canvas
   ========================================================================== */
function initParticles() {
    const canvas = document.getElementById('particleCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    
    let particles = [];
    const particleCount = Math.min(60, Math.floor((width * height) / 20000));
    
    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.4;
            this.vy = (Math.random() - 0.5) * 0.4;
            this.radius = Math.random() * 2 + 1;
        }
        
        update() {
            this.x += this.vx;
            this.y += this.vy;
            
            // Boundary collisions
            if (this.x < 0 || this.x > width) this.vx = -this.vx;
            if (this.y < 0 || this.y > height) this.vy = -this.vy;
        }
        
        draw() {
            ctx.fillStyle = '#FFDD00'; // Yellow dot
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
    
    function animate() {
        ctx.clearRect(0, 0, width, height);
        
        // Draw web lines between close particles
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
            
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < 120) {
                    ctx.strokeStyle = 'rgba(255, 221, 0, 0.08)'; // Solid color line with low opacity
                    ctx.lineWidth = 0.5;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
        
        requestAnimationFrame(animate);
    }
    animate();
    
    // Window resize handler
    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });
}

/* ==========================================================================
   Mobile Nav Menu
   ========================================================================== */
function initMobileNav() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('header nav');
    
    if (!hamburger || !navMenu) return;
    
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile nav when clicking a link
    const navLinks = document.querySelectorAll('header nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Close nav when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

/* ==========================================================================
   Typing Effect (Home Page)
   ========================================================================== */
function initTypingEffect() {
    const typingSpan = document.getElementById('typingText');
    if (!typingSpan) return;
    
    const words = [
        "Full Stack Developer.",
        "AI & Tech Educator.",
        "Self-Published Author.",
        "Computer Science Faculty."
    ];
    
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            typingSpan.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingSpan.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 120;
        }
        
        if (!isDeleting && charIndex === currentWord.length) {
            // Word fully typed. Pause before deleting
            isDeleting = true;
            typingSpeed = 2000; // 2 seconds pause
        } else if (isDeleting && charIndex === 0) {
            // Word fully deleted. Go to next word
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typingSpeed = 500; // half second pause before typing next
        }
        
        setTimeout(type, typingSpeed);
    }
    
    // Start typing animation
    setTimeout(type, 1000);
}

/* ==========================================================================
   Scroll Reveal Animations
   ========================================================================== */
function initScrollReveal() {
    const sections = document.querySelectorAll('.fade-in-section');
    
    const options = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // If it's a progress bar, trigger the fill animation
                const progressFills = entry.target.querySelectorAll('.progress-bar-fill');
                if (progressFills.length > 0) {
                    progressFills.forEach(fill => {
                        const targetWidth = fill.getAttribute('data-width');
                        fill.style.width = targetWidth;
                    });
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, options);
    
    sections.forEach(section => {
        observer.observe(section);
    });
}

/* ==========================================================================
   Web3Forms Contact Form Submission Handler
   ========================================================================== */
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    const toast = document.getElementById('formToast');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = 'SENDING MESSAGE...';
        submitBtn.disabled = true;
        
        // Get form data
        const formData = new FormData(contactForm);
        const object = {};
        formData.forEach((value, key) => {
            object[key] = value;
        });
        const json = JSON.stringify(object);
        
        // Submit using fetch api to Web3Forms
        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let res = await response.json();
            if (response.status == 200) {
                showToast("SUCCESS! YOUR MESSAGE WAS SENT.");
                contactForm.reset();
            } else {
                showToast("ERROR! " + res.message);
            }
        })
        .catch(error => {
            showToast("ERROR! SOMETHING WENT WRONG.");
        })
        .then(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        });
    });
    
    function showToast(message) {
        if (!toast) return;
        toast.textContent = message;
        toast.style.display = 'block';
        
        setTimeout(() => {
            toast.style.display = 'none';
        }, 5000);
    }
}
