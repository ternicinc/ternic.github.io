// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeAnimations();
    initializeProgressBars();
    initializeCharts();
    initializePerformanceCounters();
});

// Navigation functionality
function initializeNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }

    // Header scroll effect
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;
        
        if (header) {
            if (currentScrollY > 100) {
                header.style.background = 'rgba(15, 15, 35, 0.98)';
                header.style.backdropFilter = 'blur(15px)';
            } else {
                header.style.background = 'rgba(15, 15, 35, 0.95)';
                header.style.backdropFilter = 'blur(10px)';
            }
        }

        lastScrollY = currentScrollY;
    });
}

// Animation functionality
function initializeAnimations() {
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                
                // Special animations for specific elements
                if (entry.target.classList.contains('feature-card')) {
                    setTimeout(() => {
                        entry.target.style.transform = 'translateY(0)';
                        entry.target.style.opacity = '1';
                    }, Math.random() * 300);
                }

                if (entry.target.classList.contains('timeline-item')) {
                    entry.target.classList.add('slide-in-left');
                }

                if (entry.target.classList.contains('server-card')) {
                    entry.target.classList.add('slide-in-right');
                }
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.feature-card, .server-card, .timeline-item, .progress-card, .category-card, .config-card, .advantage');
    animateElements.forEach(el => {
        observer.observe(el);
    });

    // Circuit pattern animation
    const circuitSvg = document.querySelector('.circuit-svg');
    if (circuitSvg) {
        setInterval(() => {
            const circles = circuitSvg.querySelectorAll('circle');
            circles.forEach(circle => {
                circle.style.opacity = Math.random() > 0.5 ? '1' : '0.3';
            });
        }, 2000);
    }

    // Module assembly animation
    const moduleSlots = document.querySelectorAll('.module-slot');
    moduleSlots.forEach((slot, index) => {
        slot.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.borderColor = 'var(--primary-color)';
        });

        slot.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.borderColor = 'var(--border-color)';
        });
    });
}

// Progress bars animation
function initializeProgressBars() {
    const progressBars = document.querySelectorAll('.progress-fill');
    
    const progressObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const targetWidth = progressBar.style.width;
                
                // Reset width and animate
                progressBar.style.width = '0%';
                setTimeout(() => {
                    progressBar.style.width = targetWidth;
                }, 100);
            }
        });
    }, { threshold: 0.5 });

    progressBars.forEach(bar => {
        progressObserver.observe(bar);
    });
}

// Chart animations
function initializeCharts() {
    const chartBars = document.querySelectorAll('.bar');
    
    const chartObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bars = entry.target.querySelectorAll('.bar');
                bars.forEach((bar, index) => {
                    const targetWidth = bar.style.width;
                    bar.style.width = '0%';
                    
                    setTimeout(() => {
                        bar.style.width = targetWidth;
                    }, index * 200 + 300);
                });
            }
        });
    }, { threshold: 0.5 });

    const benchmarkCards = document.querySelectorAll('.benchmark-card');
    benchmarkCards.forEach(card => {
        chartObserver.observe(card);
    });
}

// Performance counters animation
function initializePerformanceCounters() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    function animateCounter(element, target) {
        const increment = target / 50;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            // Handle different number formats
            if (target >= 100) {
                element.textContent = Math.floor(current) + '+';
            } else {
                element.textContent = Math.floor(current);
            }
        }, 30);
    }

    const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const number = entry.target;
                const targetText = number.textContent;
                const targetNumber = parseInt(targetText.replace(/\D/g, ''));
                
                if (targetNumber) {
                    animateCounter(number, targetNumber);
                }
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => {
        counterObserver.observe(stat);
    });
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Loading state management
function showLoading(element) {
    element.classList.add('loading');
}

function hideLoading(element) {
    element.classList.remove('loading');
}

// Error handling
function showError(message, container) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    errorDiv.style.cssText = `
        background: var(--error-color);
        color: white;
        padding: 1rem;
        border-radius: var(--border-radius);
        margin: 1rem 0;
        text-align: center;
    `;
    
    if (container) {
        container.insertBefore(errorDiv, container.firstChild);
        setTimeout(() => {
            errorDiv.remove();
        }, 5000);
    }
}

// Form handling utilities
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function sanitizeInput(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

// Performance monitoring
function measurePerformance(name, fn) {
    const start = performance.now();
    const result = fn();
    const end = performance.now();
    console.log(`${name} took ${end - start} milliseconds`);
    return result;
}

// Browser support detection
function detectBrowserSupport() {
    const support = {
        intersectionObserver: 'IntersectionObserver' in window,
        customProperties: CSS.supports('color', 'var(--test)'),
        grid: CSS.supports('display', 'grid'),
        flexbox: CSS.supports('display', 'flex')
    };

    if (!support.intersectionObserver) {
        console.warn('IntersectionObserver not supported, animations may not work');
        // Fallback: add classes immediately
        document.querySelectorAll('.feature-card, .server-card, .timeline-item').forEach(el => {
            el.classList.add('fade-in');
        });
    }

    return support;
}

// Initialize browser support check
detectBrowserSupport();

// Performance optimization: Lazy load images if any
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
lazyLoadImages();

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    // ESC key closes mobile menu
    if (e.key === 'Escape') {
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.getElementById('nav-menu');
        
        if (navToggle && navMenu && navMenu.classList.contains('active')) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
});

// Service Worker registration for PWA features (if needed)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Uncomment if you want to add service worker
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered: ', registration))
        //     .catch(registrationError => console.log('SW registration failed: ', registrationError));
    });
}

// Export functions for potential use in other scripts
window.TernicApp = {
    showLoading,
    hideLoading,
    showError,
    validateEmail,
    sanitizeInput,
    measurePerformance,
    debounce,
    throttle
};
