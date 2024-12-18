// Select the menu toggle button and navigation links
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Add click event to toggle the active class
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
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
