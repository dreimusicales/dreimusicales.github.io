// ===============================
// GLOBAL SOCIAL LINKS CONFIG
// ===============================
const SOCIAL_LINKS = {
    whatsapp: "https://wa.me/59177200451",
    instagram: "https://www.instagram.com/drei_musicales",
    facebook: "https://www.facebook.com/DreiMusicales",
    tiktok: "https://www.tiktok.com/@drei_musicales"
};

// ===============================
// SOCIAL LINKS BINDER
// ===============================
(() => {
    const socialElements = document.querySelectorAll("[data-social]");

    socialElements.forEach(el => {
        const key = el.dataset.social;
        const url = SOCIAL_LINKS[key];

        if (!url) return;

        el.setAttribute("href", url);
        el.setAttribute("target", "_blank");
        el.setAttribute("rel", "noreferrer");
    });
})();

(() => {
    const navToggle = document.getElementById("navToggle");
    const nav = document.getElementById("nav");
    const backToTop = document.getElementById("backToTop");
    const year = document.getElementById("year");

    if (year) year.textContent = String(new Date().getFullYear());

    // Mobile nav
    function setNav(open) {
        nav.classList.toggle("is-open", open);
        navToggle.setAttribute("aria-expanded", String(open));
        navToggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    }

    if (navToggle && nav) {
        navToggle.addEventListener("click", () => setNav(!nav.classList.contains("is-open")));

        // Close menu when clicking a link (mobile)
        nav.querySelectorAll("a").forEach((a) => {
            a.addEventListener("click", () => setNav(false));
        });

        // Close when clicking outside
        document.addEventListener("click", (e) => {
            const isClickInside = nav.contains(e.target) || navToggle.contains(e.target);
            if (!isClickInside) setNav(false);
        });
    }

    // Back to top
    function updateBackToTop() {
        const show = window.scrollY > 600;
        backToTop.classList.toggle("is-visible", show);
    }

    if (backToTop) {
        window.addEventListener("scroll", updateBackToTop, { passive: true });
        updateBackToTop();
        backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    }
})();

// Agenda tabs
(() => {
    const tabs = document.querySelectorAll(".agendaTab");
    const panels = document.querySelectorAll(".agendaPanel");

    if (!tabs.length || !panels.length) return;

    const setDay = (day) => {
        tabs.forEach(t => {
            const active = t.dataset.day === day;
            t.classList.toggle("is-active", active);
            t.setAttribute("aria-selected", String(active));
        });
        panels.forEach(p => p.classList.toggle("is-active", p.dataset.panel === day));
    };

    tabs.forEach(tab => tab.addEventListener("click", () => setDay(tab.dataset.day)));
})();
