// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Add a simple fade-in animation when the About Section is scrolled into view
document.addEventListener('DOMContentLoaded', () => {
    const aboutSection = document.querySelector('#about');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                aboutSection.classList.add('visible');
            }
        });
    }, { threshold: 0.5 });

    observer.observe(aboutSection);
});

// Lightbox Portfolio Feature
document.addEventListener('DOMContentLoaded', () => {
    const portfolioImages = document.querySelectorAll('.portfolio-gallery img');

    // Loop through all images
    portfolioImages.forEach((image) => {
        image.addEventListener('click', (e) => {
            // Create lightbox container
            const lightbox = document.createElement('div');
            lightbox.classList.add('lightbox');

            // Add the image to the lightbox
            const lightboxImage = document.createElement('img');
            lightboxImage.src = e.target.src;
            lightboxImage.alt = e.target.alt;

            // Append the image to the lightbox
            lightbox.appendChild(lightboxImage);
            document.body.appendChild(lightbox);

            // Close lightbox on click outside the image
            lightbox.addEventListener('click', () => {
                document.body.removeChild(lightbox);
            });

            // Prevent closing when clicking directly on the image
            lightboxImage.addEventListener('click', (event) => {
                event.stopPropagation();
            });
        });
    });
});


// Add scroll-based animation for the Services Section
document.addEventListener('DOMContentLoaded', () => {
    const servicesSection = document.querySelector('#services');
    const serviceItems = document.querySelectorAll('.service-item');

    const observerOptions = {
        threshold: 0.2, // Trigger when 20% of the element is visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe the section and individual service items
    observer.observe(servicesSection);
    serviceItems.forEach((item) => observer.observe(item));
});


// JavaScript for hover effect
document.addEventListener("DOMContentLoaded", () => {
    const serviceItems = document.querySelectorAll('.service-item');

    serviceItems.forEach((item) => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = '#ffe5e9';
            item.style.color = '#333';
        });

        item.addEventListener('mouseout', () => {
            item.style.backgroundColor = '#fff';
            item.style.color = '#555';
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const icons = document.querySelectorAll('.contact-icon');

    icons.forEach((icon) => {
        icon.addEventListener('mouseover', () => {
            icon.style.transform = 'scale(1.1)';
            icon.style.transition = 'transform 0.3s ease';
        });

        icon.addEventListener('mouseout', () => {
            icon.style.transform = 'scale(1)';
        });
    });
});

