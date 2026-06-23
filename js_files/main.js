document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".site-header");
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  const scrollTop = document.querySelector(".scroll-top");

  function updateHeader() {
    const scrolled = window.scrollY > 20;
    header?.classList.toggle("is-scrolled", scrolled);
    scrollTop?.classList.toggle("is-visible", window.scrollY > 420);
  }

  function closeMenu() {
    nav?.classList.remove("is-open");
    header?.classList.remove("nav-active");
    document.body.classList.remove("nav-open");
    menuToggle?.setAttribute("aria-expanded", "false");
  }

  menuToggle?.addEventListener("click", function () {
    const isOpen = nav?.classList.toggle("is-open");
    header?.classList.toggle("nav-active", Boolean(isOpen));
    document.body.classList.toggle("nav-open", Boolean(isOpen));
    menuToggle.setAttribute("aria-expanded", String(Boolean(isOpen)));
  });

  nav?.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  scrollTop?.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();
});
