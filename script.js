// Add simple intersection observer for scroll animations if we add more content later
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Select elements that might be below the fold
    const animatedElements = document.querySelectorAll('.animate-in');
    animatedElements.forEach(el => {
        // We can add logic here if we want to trigger animation on scroll instead of load
        // For now, CSS animation handles the load animation
    });

    // Optional: Add click ripple effect or other micro-interactions
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            // Can be used for mouse-following gradient borders if desired
        });
    });

    // --- COPY PROTECTION ---

    // Disable Right Click
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });

    // Disable Dragging Images
    document.addEventListener('dragstart', (e) => {
        e.preventDefault();
    });

    // Disable Keyboard Shortcuts (F12, Ctrl+U, Ctrl+C, etc.)
    document.addEventListener('keydown', (e) => {
        // F12
        if (e.key === 'F12') {
            e.preventDefault();
        }
        // Ctrl+Shift+I (DevTools)
        if (e.ctrlKey && e.shiftKey && e.key === 'I') {
            e.preventDefault();
        }
        // Ctrl+Shift+J (Console)
        if (e.ctrlKey && e.shiftKey && e.key === 'J') {
            e.preventDefault();
        }
        // Ctrl+U (View Source)
        if (e.ctrlKey && e.key === 'u') {
            e.preventDefault();
        }
        // Ctrl+S (Save)
        if (e.ctrlKey && e.key === 's') {
            e.preventDefault();
        }
    });

    // --- DOMAIN LOCK (Anti-Clone) ---
    // Replace 'yourdomain.com' with your actual domain name
    // If the site is opened on any other domain, it will redirect or go blank

    const ALLOWED_DOMAIN = 'yourdomain.com'; // <--- CHANGE THIS

    // Only run this check if we are not in a local development environment (optional)
    // Remove 'file:' check if you want to test locally with a fake domain
    if (window.location.hostname !== ALLOWED_DOMAIN && window.location.protocol !== 'file:') {
        // Option 1: Redirect to your real site
        // window.location.href = 'https://' + ALLOWED_DOMAIN;

        // Option 2: Destroy the content (uncomment to enable)
        // document.body.innerHTML = '<h1 style="color:white;text-align:center;margin-top:20%">Conteúdo Protegido. Acesse o site oficial.</h1>';

        // console.warn('This site is running on an unauthorized domain!');
    }
});
