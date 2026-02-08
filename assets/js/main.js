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
