// Basic interactivity for Hear N Heal

// Replaced simple alert with a more formal action (simulated)
function openBooking() {
  // In a real site, this would redirect to a highly optimized booking page (e.g., Calendly, Mindbody, custom form)
  console.log("Redirecting to dedicated booking platform.");
  alert("Redirecting to our secure booking portal to reserve your session!");
  // window.location.href = "https://your-booking-platform.com/hearnheal/sessions";
}

function openEmail() {
  window.location.href = "mailto:info@hearnheal.com";
}

// Removed openCall as the primary contact is now the booking CTA/Email, but kept a link in the footer.
// function openCall() {
//   window.location.href = "tel:+919876543210";
// }

// Toggles mobile navigation menu
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

// Added an on-scroll effect for the cards (more subtle than the original JS glowing hover)
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1 // Card enters 10% of viewport
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add a simple fade-in/slide-up class on intersection
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                entry.target.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        card.style.opacity = 0; // Hide initially
        card.style.transform = 'translateY(20px)';
        observer.observe(card);
    });

    // Optional: Add a simple glow effect on hover via JS (original request)
    cards.forEach(card => {
        card.addEventListener("mouseover", () => {
          card.style.boxShadow = "0 0 20px rgba(178, 58, 97, 0.4)";
        });
        card.addEventListener("mouseout", () => {
          // Revert to the default CSS box-shadow
          card.style.boxShadow = "0 4px 10px rgba(160, 58, 90, 0.1)";
        });
    });
});