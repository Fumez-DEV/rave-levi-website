document.addEventListener('DOMContentLoaded', () => {
    /**
     * Smooth Scroll for Navigation Links and Buttons
     */
    const enableSmoothScroll = (selector) => {
        document.querySelectorAll(selector).forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    };
    enableSmoothScroll('a[href^="#"], .pricing-btn');

    /**
     * Intersection Observer for Animations
     */
    const enableIntersectionObserver = (selectors, animationClass = 'visible') => {
        const observerOptions = { threshold: 0.2 };

        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(animationClass);
                    observer.unobserve(entry.target); // Stop observing once animated
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        selectors.forEach(selector => {
            const section = document.querySelector(selector);
            if (section) {
                observer.observe(section);
                section.querySelectorAll('.service-item, .contact-item, .portfolio-item, .pricing-item, .gallery-item').forEach(item => observer.observe(item));
            }
        });
    };
    enableIntersectionObserver(['#about', '#services', '#contact', '#portfolio', '#before-after']);

    /**
     * Lightbox for Portfolio Images
     */
    const initializeLightbox = (imageSelector) => {
        document.querySelectorAll(imageSelector).forEach(image => {
            image.addEventListener('click', () => {
                const lightbox = document.createElement('div');
                lightbox.className = 'lightbox';
                lightbox.innerHTML = `
                    <img src="${image.src}" alt="${image.alt}">
                `;
                document.body.appendChild(lightbox);

                lightbox.addEventListener('click', () => {
                    document.body.removeChild(lightbox);
                });
            });
        });
    };
    initializeLightbox('.portfolio-gallery img');

    /**
     * Urgency Blink Effect for Special Elements
     */
    const addUrgencyBlinkEffect = (selector, interval = 1000) => {
        document.querySelectorAll(selector).forEach(item => {
            setInterval(() => item.classList.toggle('highlight'), interval);
        });
    };
    addUrgencyBlinkEffect('.special');

    /**
     * Add Hover Effects Dynamically
     */
    const applyHoverEffects = (selector, hoverStyles, leaveStyles) => {
        document.querySelectorAll(selector).forEach(item => {
            item.addEventListener('mouseover', () => Object.assign(item.style, hoverStyles));
            item.addEventListener('mouseout', () => Object.assign(item.style, leaveStyles));
        });
    };
    applyHoverEffects('.service-item', { backgroundColor: '#ffe5e9', color: '#333' }, { backgroundColor: '#fff', color: '#555' });
    applyHoverEffects('.contact-icon', { transform: 'scale(1.1)', transition: 'transform 0.3s ease' }, { transform: 'scale(1)' });

    /**
     * Gallery Item Hover Effects
     */
    const initializeGalleryHoverEffects = (gallerySelector) => {
        document.querySelectorAll(gallerySelector).forEach(item => {
            item.addEventListener('mouseover', () => {
                item.style.transform = 'translateY(-5px)';
                item.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
            });
            item.addEventListener('mouseout', () => {
                item.style.transform = 'translateY(0)';
                item.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
            });
        });
    };
    initializeGalleryHoverEffects('.gallery-item');

    /**
     * Animate Before & After Section on Scroll
     */
    const animateSectionOnScroll = (sectionSelector, animationClass = 'visible') => {
        const section = document.querySelector(sectionSelector);
        if (section) {
            const observer = new IntersectionObserver(
                entries => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            section.classList.add(animationClass);
                        }
                    });
                },
                { threshold: 0.2 }
            );
            observer.observe(section);
        }
    };
    animateSectionOnScroll('#before-after');
});
