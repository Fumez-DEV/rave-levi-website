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

document.addEventListener("DOMContentLoaded", () => {
    const dateInput = document.getElementById("date");
    const timeSlotsContainer = document.querySelector(".time-slots");
    const confirmation = document.getElementById("confirmation");
    const confirmDate = document.getElementById("confirm-date");
    const confirmTime = document.getElementById("confirm-time");

    // Set the minimum date to today
    const today = new Date();
    dateInput.min = today.toISOString().split("T")[0];

    // Generate time slots for a selected date
    const generateTimeSlots = () => {
        const timeSlots = [
            "09:00", "09:30", "10:00", "10:30", 
            "11:00", "11:30", "12:00", "12:30",
            "13:00", "13:30", "14:00", "14:30"
        ];
        
        // Clear previous slots
        timeSlotsContainer.innerHTML = "";

        timeSlots.forEach(time => {
            const slot = document.createElement("div");
            slot.classList.add("time-slot");
            slot.textContent = time;

            // Add click event to book slot
            slot.addEventListener("click", () => {
                bookSlot(time);
            });

            timeSlotsContainer.appendChild(slot);
        });
    };

    // Book a slot
    const bookSlot = (time) => {
        const selectedDate = dateInput.value;
        if (!selectedDate) {
            alert("אנא בחרי תאריך קודם.");
            return;
        }

        // Update confirmation message
        confirmation.style.display = "block";
        confirmDate.textContent = selectedDate;
        confirmTime.textContent = time;

        // Mark slot as booked
        const slots = document.querySelectorAll(".time-slot");
        slots.forEach(slot => {
            if (slot.textContent === time) {
                slot.classList.add("booked");
                slot.textContent = `נבחר`;
            }
        });
    };

    // Event Listener: Update time slots when date is selected
    dateInput.addEventListener("change", generateTimeSlots);
});
