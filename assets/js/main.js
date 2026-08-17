document.addEventListener("DOMContentLoaded", () => {
    lucide.createIcons();
    initMobileMenu();
    initContactForm();
    initWhatsAppModal();
});

function initMobileMenu() {
    const btn = document.getElementById("mobile-menu-btn");
    const menu = document.getElementById("mobile-menu");
    const hamburger = document.getElementById("menu-icon-hamburger");
    const close = document.getElementById("menu-icon-close");
    const links = document.querySelectorAll(".mobile-nav-link");

    if (!btn || !menu) return;

    btn.addEventListener("click", () => {
        const isHidden = menu.classList.contains("hidden");
        if (isHidden) {
            menu.classList.remove("hidden");
            hamburger.classList.add("hidden");
            close.classList.remove("hidden");
        } else {
            menu.classList.add("hidden");
            hamburger.classList.remove("hidden");
            close.classList.add("hidden");
        }
    });

    links.forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.add("hidden");
            hamburger.classList.remove("hidden");
            close.classList.add("hidden");
        });
    });
}

function initContactForm() {
    const form = document.getElementById("contact-form");
    const loader = document.getElementById("form-loader");
    const success = document.getElementById("form-success");
    const closeBtn = document.getElementById("success-close-btn");

    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        loader.classList.remove("hidden");

        setTimeout(() => {
            loader.classList.add("hidden");
            success.classList.remove("hidden");
            form.reset();
        }, 1500);
    });

    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            success.classList.add("hidden");
        });
    }
}

function initWhatsAppModal() {
    const btn = document.getElementById("whatsapp-floating-btn");
    const modal = document.getElementById("whatsapp-modal");
    const closeModal = document.getElementById("close-whatsapp-modal");

    if (!btn || !modal) return;

    btn.addEventListener("click", () => {
        modal.classList.remove("hidden");
    });

    closeModal.addEventListener("click", () => {
        modal.classList.add("hidden");
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.add("hidden");
        }
    });
}
const backToTopBtn = document.getElementById('back-to-top-btn');

// Mostrar/Ocultar con scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
        backToTopBtn.classList.add('opacity-100', 'pointer-events-auto', 'translate-y-0');
    } else {
        backToTopBtn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
        backToTopBtn.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0');
    }
});

// Scroll suave al hacer clic
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});