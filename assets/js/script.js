document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            target?.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Intersection Observer for Scroll Animations
    const observerOptions = { threshold: 0.2 };
    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const observeElements = (selectors) => {
        selectors.forEach(selector => {
            const section = document.querySelector(selector);
            if (section) {
                observer.observe(section);
                section.querySelectorAll('.service-item, .contact-item, .portfolio-item').forEach(item => observer.observe(item));
            }
        });
    };

    observeElements(['#about', '#services', '#contact', '#portfolio']);

    // Lightbox for Portfolio Images
    document.querySelectorAll('.portfolio-gallery img').forEach(image => {
        image.addEventListener('click', (e) => {
            const lightbox = document.createElement('div');
            lightbox.className = 'lightbox';
            lightbox.innerHTML = `<img src="${e.target.src}" alt="${e.target.alt}">`;
            document.body.appendChild(lightbox);

            lightbox.addEventListener('click', () => document.body.removeChild(lightbox));
        });
    });

    // Hover Effects
    const applyHoverEffect = (selector, hoverStyles, leaveStyles) => {
        document.querySelectorAll(selector).forEach(item => {
            item.addEventListener('mouseover', () => Object.assign(item.style, hoverStyles));
            item.addEventListener('mouseout', () => Object.assign(item.style, leaveStyles));
        });
    };

    applyHoverEffect('.service-item', { backgroundColor: '#ffe5e9', color: '#333' }, { backgroundColor: '#fff', color: '#555' });
    applyHoverEffect('.contact-icon', { transform: 'scale(1.1)', transition: 'transform 0.3s ease' }, { transform: 'scale(1)' });
});

document.addEventListener('DOMContentLoaded', () => {
    // Add urgency class to "special" items dynamically
    const specials = document.querySelectorAll('.special');
    specials.forEach(item => {
        setInterval(() => {
            item.classList.toggle('highlight');
        }, 1000); // Blink effect every second
    });

    // Smooth scroll to contact section
    const pricingBtn = document.querySelector('.pricing-btn');
    pricingBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(pricingBtn.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Fade-in Animation for Pricing Items on Scroll
document.addEventListener('DOMContentLoaded', () => {
    const pricingItems = document.querySelectorAll('.pricing-item');

    const observerOptions = { threshold: 0.2 }; // Trigger when 20% is visible

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Add visibility class
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    pricingItems.forEach(item => observer.observe(item));
});